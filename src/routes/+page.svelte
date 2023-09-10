<script>
    import Bucket from "../components/bucket.svelte";
</script>

<div class="overall-container">
	<div class="header-container">
		<h1>Reef's Bucket List for the future.</h1>
		<p>(Because life is worth living).</p>
	</div>
    <div class="bucket-container">
        <Bucket />
    </div>
</div>

<style>
	:global(body),
    :global(html) {
		background-color: #333;
		color: white;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
	}

	.header-container,
    .bucket-container {
		width: fit-content;
		margin: auto;
		text-align: center;
	}
	.header-container h1 {
		margin-bottom: 0;
	}
	.header-container p {
		margin-top: 0;
	}

</style>
