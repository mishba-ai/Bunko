<script>
  import { supabase } from "../../../lib/helper/supabaseClient.js";
  import { goto } from "$app/navigation";

  async function signInWithGoogle() {
  
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options:{
          redirectTo:"https://localhost:5173/home"
        }
      });
      if (error) {
        console.error("error signing in ", error);
      }
      
     
  }
</script>

<body class="w-screen">
  <button
    on:click={signInWithGoogle}
    class="border w-48 p-3 flex justify-center items-center hover:bg-slate-400 rounded-2xl bg-slate-400"
    >Login with google</button
  >
</body>
