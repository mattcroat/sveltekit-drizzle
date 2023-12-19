import { db } from '$lib/server/db'
import { todos } from '$lib/server/db/schema'
import { eq } from 'drizzle-orm'

export async function load() {
	return { todos: await db.select().from(todos) }
}

export const actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData()
		const todo = String(formData.get('todo'))
		await db.insert(todos).values({ todo })
	},
	removeTodo: async ({ url }) => {
		const id = +url.searchParams.get('id')!
		await db.delete(todos).where(eq(todos.id, id))
	},
}
