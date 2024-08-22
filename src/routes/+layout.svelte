<script>
  import "../app.css";
  import Header from "$lib/Components/Header.svelte";
  // import { isoverlayopen } from "../stores/Overlaystore";
  import { onMount } from "svelte";
  import { supabase } from "$lib/helper/supabaseClient.js";
  import { user } from "../lib/stores/authStore";


  //  onMount is a lifecycle function that runs when the component is mounted to the DOM. mounted means the component is rendered on the screen

  // onMount(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     user.set(session ? session.user : null);
  //   });

  //   const {data:{subscription}} = supabase.auth.onAuthStateChange((_,session)=>{user.set(session ? session.user : null)});
  //   return () => subscription.unsubscribe();
  // });
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <slot />
</div>
