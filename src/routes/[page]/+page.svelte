<script lang="ts">
    import { WHERE } from "$lib";
    import { getAnonToken, handleAuth } from "$lib/auth";
    import type { PageData } from "./$types";

    export let data: PageData;
    let token: Promise<string>;
    if (data.page != WHERE) {
        token = Promise.resolve(handleAuth());
    } else {
        token = getAnonToken();
    }

    // let ampPrefix = "https://remix-dev.remixlabs.com/a/"
    // let ampPrefix = "http://localhost:8000/";
    let authPrefix = "https://auth.remixlabs.com/a";
</script>

<div class="container">
    {#await token}
        "Loading"
    {:then t}
        <rmx-remix
            amp-prefix={authPrefix}
            token={t}
            screen-name={data.page}
            src="/camino.remix"
            rmx-uid="svelte"
        ></rmx-remix>
    {/await}
</div>

<style>
    .container {
        max-width: 500px;
        margin: 0 auto;
    }
</style>
