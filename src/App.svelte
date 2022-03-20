<script lang="ts">
	import { onMount } from "svelte"
	import { setup } from "./scripts"

	onMount(() => {
		setup()
	})
</script>

<main>
	<div id="editor">
	</div>
</main>

<style lang="sass">
</style>