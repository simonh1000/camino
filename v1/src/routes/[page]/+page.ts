import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { PILGRIMS, WHERE } from "$lib";

export const load: PageLoad = ({ params }) => {
    // console.log(
    //     "[+page.ts]",
    //     params.page,
    //     params.page === "pilgrims" || params.page === WHERE
    // );
    if (params.page === PILGRIMS || params.page === WHERE) {
        return { page: params.page };
    }
    error(404, "Not found");
};
