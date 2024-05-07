<script lang="ts">
    import type { PageData } from "./$types";

    import { WHERE } from "$lib";
    import { getAnonToken, handleAuth } from "$lib/auth";

    export let data: PageData;
    let token: Promise<string>;
    let loaded = false;

    if (data.page != WHERE) {
        token = Promise.resolve(handleAuth());
    } else {
        // we wont't need this if RmxBase does it
        token = getAnonToken();
    }
    token.then(() => {
        setTimeout(() => {
            const wc = document.querySelector("rmx-remix");
            if (wc) {
                // @ts-ignore
                wc.addRemixEventListener("remix/first-view", () => {
                    console.log("**first view**");
                    loaded = true;
                });
            }
        }, 100);
    });
    // let authPrefix = "http://localhost:8000/";
    let authPrefix = "https://auth.remixlabs.com/a";
</script>

<div class="container">
    <div class={loaded ? "hide" : "loading"}>
        <img src="/loading.jpg" alt="" />
    </div>
    {#await token}
        <div class="overlay">Loading....</div>
    {:then t}
        {#if !loaded}
            <div class="overlay">Loading....</div>
        {/if}
        <rmx-remix
            class={"webcomp" + loaded ? " show" : ""}
            auth-prefix={authPrefix}
            token={t}
            screen-name={data.page}
            src="/camino.remix"
            rmx-uid="svelte"
        ></rmx-remix>
    {/await}
</div>

<style>
    .container {
        height: 100vh;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .loading {
        /* padding-top: 60px; */
        overflow: hidden;
        img {
            width: 100%;
            /* margin-left: -50%; */
        }
    }
    .overlay {
        font-size: 40px;
        position: absolute;
        top: 50px;
        text-align: center;
        left: 0;
        right: 0;
        color: white;
        background-color: #000000cc;
    }
    .hide {
        display: none;
    }
    .webcomp {
        height: 0px;
        overflow: hidden;
    }
    .webcomp.show {
        flex-grow: 1;
        height: auto;
    }
    footer {
        height: 100px;
        overflow: hidden;
        flex-shrink: 0;
        flex-grow: 0;
    }
</style>
