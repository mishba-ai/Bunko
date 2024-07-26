<script>
    import { supabase } from "../../../lib/helper/supabaseClient.js";
   import {page} from '$app/stores';

    
        const login = async() => await  supabase.auth.signInWithOAuth({
          provider: "google",
        });
    

</script>

<body class="w-screen">
  <button
    on:click={login}
    class="border w-32 flex justify-center items-center hover:bg-slate-400 rounded-2xl bg-slate-400"
    >Login with google</button
  >
</body>
