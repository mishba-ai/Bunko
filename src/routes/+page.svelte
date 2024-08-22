<!-- <script>
      import { supabase } from "$lib/helper/supabaseClient.js";
  import { goto } from "$app/navigation";

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
      console.log(data);
    } catch (error) {
      console.error("error signing in ", error);
    }
  }
</script>

<secttion>
    <button on:click={signInWithGoogle} class="border w-48 p-3 flex justify-center items-center hover:bg-slate-400 rounded-2xl bg-slate-400">Login with google</button>
</secttion>
   -->
