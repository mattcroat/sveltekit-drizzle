import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

const sqlite = new Database('data/sqlite.db')
export const db = drizzle(sqlite)

/*
import Database from 'better-sqlite3'

const db = new Database('database/sqlite.db')

export function createTodos() {
	db.exec('drop table if exists todos')
	const sql = `
    create table todos (
      id integer primary key,
      todo text not null
    );
  `
	db.exec(sql)
}

export function getTodos() {
	const todos = db.prepare('select * from todos').all()
	return todos
}

export function addTodo(todo: string) {
	db.prepare('insert into todos (todo) values (?)').run(todo)
}

export function removeTodo(todoId: number) {
	db.prepare('delete from todos where id = ?').run(todoId)
}
*/
