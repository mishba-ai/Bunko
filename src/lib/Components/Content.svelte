<script>
    import {isOverlayOpen,id} from '../stores/Overlaystore.js'
    import {getContext} from 'svelte';
    const modalId = getContext('modalId');
</script>

<div>
	<!-- <div class="modal" class:hidden={modalId !== $id}>
		<div class="">
			<div class="" on:click={() => $id = false}>&times;</div>
			<slot />
		</div>
	</div> -->
</div>