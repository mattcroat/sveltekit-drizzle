<script lang="ts">
	import { enhance } from '$app/forms'

	export let data
</script>

<form use:enhance method="POST" action="?/addTodo">
	<input type="text" name="todo" />
</form>

{#if data.todos}
	{#each data.todos as { id, todo }}
		<ul>
			<li>
				<span>{todo}</span>
				<form use:enhance method="POST" action="?/removeTodo&id={id}">
					<button>❌</button>
				</form>
			</li>
		</ul>
	{/each}
{/if}

<style>
	:global(body) {
		color: white;
		background: black;
	}
</style>
