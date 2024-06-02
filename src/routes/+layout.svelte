<script>
  import "../app.css";
  import Header from "$lib/Components/Header.svelte";
  // import { isoverlayopen } from "../stores/Overlaystore";

</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <slot />
</div>