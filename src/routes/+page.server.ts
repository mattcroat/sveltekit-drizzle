import { db } from '$lib/server/db'
import { todos } from '$lib/server/db/schema'

export async function load() {
	return { todos: await db.select().from(todos) }
}

export const actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData()
		const todo = formData.get('todo')
	},
	removeTodo: ({ url }) => {
		const id = url.searchParams.get('id')
	},
}
