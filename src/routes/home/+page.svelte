<script>
  import Recommend from "$lib/Components/Recommend.svelte";
  import Featured from "$lib/Components/Featured.svelte";
  import Dailychallenge from "$lib/Components/Dailychallenge.svelte";
</script>

<body class="bg-gradient-to-b from-[#c9e2f9] to-[#f1faee] px-5">
  
  <section class="mt-5">
    <div class="font text-9xl text-center w-3/4 mx-auto right-[50%] font-bold">
      <h1>Books are a uniquely portable magic</h1>
      <img
        src="/Images/starmagic.png"
        alt="star"
        class="star w-1/4 absolute bottom-12 right-20"
      />
    </div>
  </section>

  <section class="mt-24 flex justify-center items-center mb-5 gap-x-4">
    <div class="flex gap-x-4">
      <Recommend />

      <div class="flex flex-col gap-y-4">
        <Featured />
        <Dailychallenge />
      </div>

    </div>
  </section>
</body>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Joti+One&display=swap");

  .font {
    font-family: "Joti One", cursive;
  }

  /* @media only screen and (max-width: 768px) {
    .font {
      font-size: 5.6rem;
    }

    .star {
      position: absolute;
      bottom: 86px;
      right: 54px;
    }
  } */
</style>
