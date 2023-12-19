import { Config } from 'drizzle-kit'

export default {
	schema: './src/lib/server/db/schema.ts',
	out: './drizzle/migrations',
	driver: 'better-sqlite',
	dbCredentials: {
		url: 'drizzle/db/sqlite.db',
	},
} satisfies Config
