# Camino

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Dependencies

### rmx-remix

In turntable/web-components/rmx-remix

```sh
# ensure you have latest version
npm run up
# copy to project
cp web-components/rmx-remix/dist/* ../simon/camino/static
```

## Cloud Agent

### Copy .remix to /static

Curl: `-F, --form <name=content>`

```sh
AMP_URL=http://localhost:8000
CLOUD_URL=http://127.0.0.1:8080/

AMP_URL=https://remix-dev.remixlabs.com/a
CLOUD_URL=https://agt-dev.remixlabs.com

# 1) Create a new WorkSpace
curl -X POST -H "Authorization: Bearer $TOKEN_REMIX_DEV" -H "content-type: application/json" -d '{"name":"sh-camino"}' "$CLOUD_URL/ws"

# 1) EXPORT a .remix file of the agents
curl -X POST \
  -d '{"apps": {"camino": true}, "records": {}, "metadata": {"test": "simon"}}' \
  -H "content-type: text/plain;charset=UTF-8" \
  -H "Authorization: Bearer $TOKEN_REMIX_DEV" \
  --output "static/camino.remix" \
  "$AMP_URL/x/apps/export?includeDebug=true"

# 2) run permission for anon
curl  -X POST \
  -H "Authorization: Bearer $TOKEN_REMIX_DEV" \
  -F subject=user/_rmx_anon_user \
  -F resource=agent/camino/get_all \
  -F role=runner \
  "$CLOUD_URL/grant-permission/simon"
```
