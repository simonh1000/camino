import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";
import { WHERE } from "$lib";
import "normalize.css";

export const ssr = false;

export const load: LayoutLoad = (d) => {
    // console.log("[+layout.ts]", d.route.id);
    // redirect / -> /wherearewe
    if (d.route.id === "/") redirect(307, WHERE);
    return {};
};
