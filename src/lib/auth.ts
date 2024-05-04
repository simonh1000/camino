const AUTH_AMP_PREFIX = "https://auth.remixlabs.com/a/";
const RMX_AUTH_TOKEN = "rmx-auth-token"; // key for storing auth token in local storage

/* Checks if token is valid
 * @param {string} token - jwt token
 * @returns {boolean} - true if token is valid, false otherwise
 *
 * A token is valid if it is not expired
 * TODO : other proper validation?
 */
function isTokenValid(token: null | string) {
    // check if jwt token exists and not expired
    if (!token) {
        return false;
    }
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp * 1000 > Date.now();
    } catch (e) {
        return false;
    }
}

function redirectToAuth() {
    window.location.href = `${AUTH_AMP_PREFIX}x/auth?redirect=${encodeURIComponent(
        // current url with query string
        window.location.origin +
            window.location.pathname +
            window.location.search
    )}`;
}

function parseTokenFromUrl() {
    try {
        const token = window.location.hash.replace(/^(#token=)/, "");
        if (isTokenValid(token)) {
            // store token in local storage
            localStorage.setItem(RMX_AUTH_TOKEN, token);
            // Clear the hash from the URL without reloading the page
            history.pushState(
                "",
                document.title,
                window.location.pathname + window.location.search
            );
        }
    } catch (e) {
        console.error(e);
    }
}

export function handleAuth(): string {
    // first handle token from url if there is one
    parseTokenFromUrl();

    // check if token in local storage is valid
    let token = localStorage.getItem(RMX_AUTH_TOKEN);
    if (token === null || !isTokenValid(token)) {
        localStorage.removeItem(RMX_AUTH_TOKEN);
        redirectToAuth();
    }
    // new code to return the token
    else {
        return token;
    }
    return "unreached";
}

export function getAnonToken(): Promise<string> {
    return fetch(AUTH_AMP_PREFIX + "x/token", {
        method: "POST",
    })
        .then((res) => res.json())
        .then((res) => res.access_token);
}
