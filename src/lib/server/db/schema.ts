import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const todos = sqliteTable('todos', {
	id: integer('id').primaryKey(),
	todo: text('todo').notNull(),
})
