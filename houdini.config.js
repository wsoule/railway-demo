/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "https://backboard.railway.com/graphql/v2"
    },
    "runtimeDir": ".houdini",
    "plugins": {
        "houdini-svelte": {}
    }
}

export default config
