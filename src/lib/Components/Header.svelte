<script>
  import "../../app.css";
  import bibliophilelogo from "/Images/bibliophilelogo.png";
  import bookgsbg from "/Images/bookgsbg.png";
  import searchicon from "/searchicon.svg";

  // search feature
 import Overlaysearch from "./Overlaysearch.svelte";
 function isoverlayopen (){
       
 }
</script>

<header class=" w-full flex justify-around searchdiv">
  <div>
    <img src={bibliophilelogo} alt="bibliophilelogo" class="h-20 w-40" />
  </div>

  <nav class="flex gap-x-8 p-6 font-semibold text-md text-lg">

    <button on:click={isoverlayopen} class="mb-6">
      <img
        src={searchicon}
        alt="search"
        class="w-8 h-8 p-1 hover:bg-[#ceecf7] rounded-xl"
      />
    </button>

    <a href="/" class="hover:text-[#75b3c9]">Home</a>
    <a href="/about" class="hover:text-[#75b3c9]">Library</a>
    <a href="/contact" class="hover:text-[#75b3c9]">About</a>
  </nav>

  <div class="flex gap-x-8 p-6">
    <a href="/signup">
      <button
        class="rounded-[3.8rem] border-2 border-gray-400 bg-transparent text-sm px-1 w-40 flex py-1 hover:bg-[#d1f4ff] hover:border-transparent"
      >
        <img
          src={bookgsbg}
          alt="sd"
          class="h-10 w-10 flex relative rounded-full right-0"
        />
        <span class="pt-2 text-md pl-3 font-bold">GET STARTED</span></button
      ></a
    >
  </div>
</header>

<!-- 
  {$isoverlayopen} -->
   
  

