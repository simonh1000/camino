# Camino

There is a a script in flymixer to set permissions on agent

## Download a .remix file

https://www.notion.so/Studio-Server-Platform-Server-API-1061d464528f80449377e6c07e72b30b?pvs=4#02668d75d6354c58a4874dff2a4bc326

```sh
AUTH="Bearer $TOKEN"

curl -H "$AUTH" \
    -d '{"apps": {"camino": true}, "metadata":{}}' \
    https://remix-dev.remixlabs.com/a/x/apps/export

```

## Upload

```sh
npx wrangler pages deploy
```
