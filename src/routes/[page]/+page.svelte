<script lang="ts">
    import type { PageData } from "./$types";

    import { init } from "$lib/remix-file-loader.js";
    import { WHERE } from "$lib";
    import { getAnonToken, handleAuth } from "$lib/auth";

    export let data: PageData;
    let token: Promise<string>;
    let loaded = false;
    const mixcoreWasmUrl = "https://dev.remix.app/js/mixcore.wasm";
    let authPrefix = "https://auth.remixlabs.com/a";
    const remixFileURL = "/camino.remix";

    if (data.page != WHERE) {
        // not on the public page, so need a user token
        token = Promise.resolve(handleAuth());
    } else {
        // i.e we are on /wherearwe and only need anon token
        token = getAnonToken();
    }
    token.then((t) => {
        setTimeout(() => {
            // new loading process.
            // Load webcomp and listen for completed event
            // load .remix and await mixcoreFlags
            const rmxRuntime = document.querySelector("rmx-runtime");
            if (rmxRuntime) {
                let webcomp = new Promise((resolve, reject) => {
                    rmxRuntime.addEventListener("remix/ready", () => {
                        loaded = true;
                        // console.log("received remix/ready");
                        return resolve(null);
                    });
                });

                Promise.all([init(remixFileURL, mixcoreWasmUrl), webcomp]).then(
                    (res) => {
                        // console.log("all", res);
                        // @ts-ignore
                        rmxRuntime.attachAsyncData(res[0]);
                    },
                );
            } else console.error("no rmx-runtime");
        }, 0);
    });
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
        <rmx-runtime
            class={"webcomp" + loaded ? " show" : ""}
            vm-init="client:async"
            auth-prefix={authPrefix}
            token={t}
            screen-name={data.page}
            rmx-uid="svelte"
            constants={JSON.stringify({ title: "Primitivo" })}
        ></rmx-runtime>
    {/await}
</div>

<style lang="css">
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
        & > img {
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
