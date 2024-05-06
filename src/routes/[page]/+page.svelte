<script lang="ts">
    import { WHERE, delDbCache } from "$lib";
    import { getAnonToken, handleAuth } from "$lib/auth";
    import type { PageData } from "./$types";

    export let data: PageData;
    let token: Promise<string>;
    let loaded = false;

    if (data.page != WHERE) {
        token = Promise.resolve(handleAuth());
    } else {
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
    // let ampPrefix = "https://remix-dev.remixlabs.com/a/"
    // let ampPrefix = "http://localhost:8000/";
    let authPrefix = "https://auth.remixlabs.com/a";
</script>

<div class="container">
    <div class={loaded ? "hide" : "loading"}>
        <img src="/loading.jpg" alt="" />
    </div>
    {#await token}
        "Loading...."
    {:then t}
        <rmx-remix
            class={loaded ? "show" : ""}
            amp-prefix={authPrefix}
            token={t}
            screen-name={data.page}
            src="/camino.remix"
            rmx-uid="svelte"
        ></rmx-remix>
    {/await}
    <footer class="footer">
        <button class="delete-button" onclick={delDbCache}>Delete Cache</button>
    </footer>
</div>

<style>
    .container {
        height: 100vh;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .loading {
        padding-top: 60px;
        overflow: hidden;
        img {
            height: 100%;
            /* margin-left: -50%; */
        }
    }
    .hide {
        display: none;
    }
    rmx-remix {
        height: 0px;
    }
    rmx-remix.show {
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
