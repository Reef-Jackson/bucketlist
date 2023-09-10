<script>
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';

	const pb = new PocketBase('http://127.0.0.1:8090');

	let records = [];
	let inputText;
	let post;

	async function getItems() {
		records = await pb.collection('bucket').getFullList({
    	sort: '-created',
		});
		console.log(records);
	}	

	onMount(() => {
		getItems();
	});

	async function postItem() {
    const data = {
      "bucket_text": inputText,
      "completion": false
    };
    post = await pb.collection('bucket').create(data);
    getItems();
    console.log(data);
  	}

	async function handleDelete(currentPost) {
		await pb.collection('bucket').delete(currentPost);
		getItems();
	}

</script>

<div class="container-container">
	<div class="center-content">
		<form on:submit={postItem}>
			<input type="text" placeholder="Go Climbing..." bind:value={inputText}/>
			<button>Add</button>
		</form>
		<div class="container">
			{#each records as record}
				<div class="bucket-item">
					<span>{record.bucket_text}</span>
					<button class="item-button" on:click={() => handleDelete(record.id)}>Delete</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	:global(body),
	:global(html) {
		height: 100%;
		margin: 0;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}

	.container-container {
		padding-top: 5rem;
	}

	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 30rem;
		padding-top: 1rem;
		box-sizing: border-box;
	}

	form {
		width: 100%;
	}

	*:focus {
		outline: 0 !important;
	}
	input {
		padding: 0.5rem;
		font-size: Small;
		border: none;
	}
	button {
		padding: 0.5rem;
		border-radius: 0;
		border: none;
		background-color: white;
		outline: none;
		width: 4rem;
	}
	button:hover {
		background-color: rgb(255, 194, 254);
	}
	button:active {
		background-color: rgb(253, 129, 251);
		transform: translateY(2px);
	}
	.bucket-item {
		width: 29.6rem;
		height: fit-content;
		background-color: whitesmoke;
		color: black;
		padding: 1rem 0rem 1rem 0rem;
		margin-bottom: 1rem;
		border: solid black 0.2rem;
		display: flex;
		justify-content: space-between;
	}

	.bucket-item:hover {
		background-color: rgb(255, 194, 254);
		transition: 0.2s;
	}

	.bucket-item span {
		padding-left: 1rem;
		height: fit-content;
		align-self: center;
	}

	.item-button {
		margin-right: 1rem;
		background-color: rgb(237, 127, 127);
		border: solid black .1rem;
	}

	.item-button:hover {
		background-color: rgb(237, 127, 127);
	}
</style>
