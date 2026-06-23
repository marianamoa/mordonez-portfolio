import { site } from "../data/site";
import { getJournalArticles } from "../lib/journal.server";

export async function GET() {
	const articles = await getJournalArticles();
	const items = articles
		.map((article) => {
			const link = `${site.url}/journal/${article.slug}/`;
			return `
				<item>
					<title><![CDATA[${article.title}]]></title>
					<link>${link}</link>
					<guid>${link}</guid>
					<description><![CDATA[${article.excerpt}]]></description>
				</item>`;
		})
		.join("");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<rss version="2.0">
			<channel>
				<title>${site.name} Journal</title>
				<link>${site.url}/journal/</link>
				<description>Notes on AI, UX and conversion design by ${site.name}.</description>
				${items}
			</channel>
		</rss>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
		},
	});
}
