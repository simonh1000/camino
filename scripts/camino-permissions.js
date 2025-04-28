/* *************************
Sets agent permissions

In this case, I want to end up with 

 - some agents with anon access
 - some specific users with general run access, who can thus post and delete
************************* */

const AUTH = `Bearer ${process.env.TOKEN}`;
const CLOUD_URL = "https://flymixer-broken-moon-4375.fly.dev";
// const CLOUD_URL = "https://agt-dev.remixlabs.com";
const WS = "simon";
const APP = "camino";

// console.log(AUTH);
const runners = [
    "simhampton@gmail.com",
    "hotbelgo@gmail.com",
    "liesbeth.devriendt@gmail.com",
];

const anonAgents = ["get_posts", "wave"];
// const adminAgents = ["save", "delete"];

/* ************ Add runner permissions ***************** */

//   -d '{"_rmx_type": "permission_grant", "subject":"user/x@gmail.com", "role":"runner", "resource":"db/camino"}' \
async function grantRunnerToUser(email) {
    const subject = `user/${email}`;
    return fetch(`${CLOUD_URL}/grant-permission/${WS}`, {
        method: "POST",
        headers: {
            Authorization: AUTH,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _rmx_type: "permission_grant",
            subject,
            role: "runner",
            resource: `db/${APP}`,
        }),
    })
        .then((res) => res.json())
        .then((res) => ({ ...res, subject }));
}

async function createRunners() {
    const res = await Promise.all(runners.map(grantRunnerToUser));
    // console.log("createRunners", res);
    return res;
}

/* ************ Anon Agents ***************** */

//   -d '{"_rmx_type": "permission_grant", "subject":"anonymous", "role":"runner", "resource":"agent/camino/<agentName>"}' \
async function grantAnonToAgent(agentName) {
    const subject = "anonymous";
    return fetch(`${CLOUD_URL}/grant-permission/${WS}`, {
        method: "POST",
        headers: {
            Authorization: AUTH,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _rmx_type: "permission_grant",
            subject,
            role: "runner",
            resource: `agent/${APP}/${agentName}`,
        }),
    })
        .then((res) => res.json())
        .then((res) => ({ ...res, name: agentName, subject }));
}

async function createAgentAnonPerms() {
    return Promise.all(anonAgents.map(grantAnonToAgent));
}
/* ************ Delete Agent Permissions ***************** */
async function removeAgentPermission(agentName, id) {
    let url = `${CLOUD_URL}/v1/ws/${WS}/app/${APP}/agent/${agentName}/permissions/${id}`;
    let res = await fetch(url, {
        method: "DELETE",
        headers: {
            Authorization: AUTH,
        },
    });
    return await res.text();
}

async function getAgentPermissions(agentName) {
    // /v1/ws/{ws}/app/{app}/permissions
    // /v1/ws/{ws}/app/{app}/agent/{agent}/permissions
    let url = `${CLOUD_URL}/v1/ws/${WS}/app/${APP}/agent/${agentName}/permissions`;
    let res = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: AUTH,
        },
    });
    return await res.json();
}

async function removeAgentAnonPerms(agentName) {
    let res = await getAgentPermissions(agentName);
    return Promise.all(
        res.map((record) => removeAgentPermission(agentName, record.id))
    );
}

/* ************ Delete DB Permissions ***************** */

async function getAppPermissions(agentName) {
    // /v1/ws/{ws}/app/{app}/permissions
    // /v1/ws/{ws}/app/{app}/agent/{agent}/permissions
    let url = `${CLOUD_URL}/v1/ws/${WS}/app/${APP}/permissions`;
    let res = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: AUTH,
        },
    });
    return await res.json();
}

/* ************Init **************************************** */

async function init() {
    // Set anonymous agents
    await removeAgentAnonPerms("save");
    const anonResult = await createAgentAnonPerms();

    // set users with general run permissions
    const runners = await createRunners();
    return { anonResult, runners };
}

init().then(console.log).catch(console.error);
// getAppPermissions().then(console.log).catch(console.error);
