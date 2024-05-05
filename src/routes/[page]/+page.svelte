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

    const dbName = "keyval-store";
    const objStoreName = "keyval";
    const key = "/camino.remix";

    function del() {
        console.log("Attempting to delete");
        // Let us open our database
        const dbVersion = 2;
        const request = indexedDB.open(dbName, dbVersion);
        // var deleteRequest = indexedDB.deleteDatabase(dbName);
        // deleteRequest.onsuccess = (evt) => {
        //     console.log("deleted", evt);
        // };
        // deleteRequest.onerror = (evt) => {
        //     console.error("delete", evt);
        // };

        request.onsuccess = (evt) => {
            const db = request.result;
            console.log("onsuccess", evt, db);
        };
        request.onupgradeneeded = (evt: any) => {
            const db = evt.target.result;
            console.log("onupgradeneeded", evt, db);
            // const transaction = db.transaction([objStoreName], "readwrite");

            db.deleteObjectStore(objStoreName);
            // transaction.oncomplete = () => {
            //     console.log("complete");
            // };
        };
        request.onerror = (evt) => {
            console.error(evt, request);
        };
    }
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
    <button onclick={del}>Delete</button>
</div>

<style>
    .container {
        max-width: 500px;
        margin: 0 auto;
    }
</style>
