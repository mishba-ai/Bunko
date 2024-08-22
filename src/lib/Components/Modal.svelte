<script>
    import {setContext} from 'svelte';
    import {isOverlayOpen, id} from '../stores/Overlaystore.js'
    setContext('modalId', id);
</script>
<div>
    <slot/>
    <!-- <slot> element is a powerful tool for building reusable components with flexible content. It acts as a placeholder where users can inject their own content, allowing you to create components that can be customized for different scenarios -->
</div>