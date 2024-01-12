<script>
import Modal from "./Modal.svelte"
	import Trigger from "./Trigger.svelte"
	import Content from "./Content.svelte"
</script>


<Modal >
  <Content>
     <div class="h-screen w-screen bg-gray-100 opacity-90 ">
    <div class="mt-36">
      <input
        class="h-12 w-96 bg-gradient-to-r from-[#c9e2f9] to-[#f1faee] rounded-3xl p-2"
        placeholder="Search"
      />
    </div>
  </div>
  </Content>
  <Trigger>
    <button>Open modal big</button>
  </Trigger>
</Modal>

<!-- {#if isoverlayclose}
 
{/if} -->