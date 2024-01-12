<script>
    import { isOverlayOpen, id} from '../../stores/Overlaystore.js'
    import {getContext} from 'svelte';
    const modalId = getContext('modalId');
    // getcontext is used to access the value that was set with setcontext. You call this function in any component that wants to use the data provided by the context.
</script>
<span on:click={() => $id = modalId}>
	<slot />
</span>

<style>
	span:hover	 {
		cursor: pointer;
	}
</style>