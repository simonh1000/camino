// place files you want to import through the `$lib` alias in this folder.

export const WHERE = "wherearewe";
export const PILGRIMS = "pilgrims";

// const dbName = "keyval-store";
// const objStoreName = "keyval";
// const key = "/camino.remix";

// // Think this was a for a bug that meant that the app did not update properly
// export function delDbCache() {
//     console.log("Attempting to delete");
//     // Let us open our database
//     const dbVersion = 3;
//     const request = indexedDB.open(dbName, dbVersion);
//     // var deleteRequest = indexedDB.deleteDatabase(dbName);
//     // deleteRequest.onsuccess = (evt) => {
//     //     console.log("deleted", evt);
//     // };
//     // deleteRequest.onerror = (evt) => {
//     //     console.error("delete", evt);
//     // };

//     request.onsuccess = (evt) => {
//         const db = request.result;
//         console.log("onsuccess", evt, db);
//     };
//     request.onupgradeneeded = (evt: any) => {
//         const db = evt.target.result;
//         console.log("onupgradeneeded", evt, db);
//         // const transaction = db.transaction([objStoreName], "readwrite");

//         db.deleteObjectStore(objStoreName);
//         // transaction.oncomplete = () => {
//         //     console.log("complete");
//         // };
//     };
//     request.onerror = (evt) => {
//         console.error(evt, request);
//     };
// }
