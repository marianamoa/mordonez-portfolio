import { neon } from "@neondatabase/serverless";

let cachedSql: ReturnType<typeof neon> | undefined;

export function getDatabaseUrl() {
	return import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;
}

export function hasDatabaseUrl() {
	return Boolean(getDatabaseUrl());
}

export function getSql() {
	const databaseUrl = getDatabaseUrl();
	if (!databaseUrl) {
		throw new Error("Missing DATABASE_URL environment variable.");
	}

	cachedSql ??= neon(databaseUrl);
	return cachedSql;
}
