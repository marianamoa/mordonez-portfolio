import { articles as fallbackArticles } from "../data/site";
import { getSql, hasDatabaseUrl } from "./neon.server";

export type JournalArticle = {
	slug: string;
	title: string;
	keyword: string;
	category: string;
	excerpt: string;
	outline: string[];
	bodyMarkdown?: string;
	metaDescription?: string;
	publishedAt?: string;
};

type JournalRow = {
	slug: string;
	title: string;
	excerpt: string;
	body_markdown: string;
	primary_keyword: string;
	meta_description: string;
	category: string;
	outline: string[] | null;
	published_at: string | null;
};

function fallback(): JournalArticle[] {
	return fallbackArticles.map((article) => ({
		slug: article.slug,
		title: article.title,
		keyword: article.keyword,
		category: article.category,
		excerpt: article.excerpt,
		outline: article.outline,
	}));
}

function fromRow(row: JournalRow): JournalArticle {
	return {
		slug: row.slug,
		title: row.title,
		keyword: row.primary_keyword,
		category: row.category,
		excerpt: row.excerpt,
		outline: row.outline ?? [],
		bodyMarkdown: row.body_markdown,
		metaDescription: row.meta_description,
		publishedAt: row.published_at ?? undefined,
	};
}

export async function getJournalArticles(): Promise<JournalArticle[]> {
	if (!hasDatabaseUrl()) {
		return fallback();
	}

	try {
		const sql = getSql();
		const rows = await sql`
			select
				slug,
				title,
				excerpt,
				body_markdown,
				primary_keyword,
				meta_description,
				category,
				outline,
				published_at
			from public.journal_entries
			where status = 'published'
			order by published_at desc nulls last, created_at desc
		`;

		return (rows as JournalRow[]).map(fromRow);
	} catch (error) {
		console.warn("Falling back to static journal articles:", error);
		return fallback();
	}
}

export async function getJournalArticle(slug: string): Promise<JournalArticle | undefined> {
	const articles = await getJournalArticles();
	return articles.find((article) => article.slug === slug);
}
