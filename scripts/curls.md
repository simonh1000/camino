# Camino Dev instructions

## Amp

https://www.notion.so/Studio-Server-Platform-Server-API-1061d464528f80449377e6c07e72b30b?pvs=4#02668d75d6354c58a4874dff2a4bc326

EXPORT a .remix file of the agents

```
AMP_URL=http://localhost:8000
AMP_URL=https://remix-dev.remixlabs.com/a

curl -X POST \
  -d '{"apps": {"camino": true}, "records": {}, "metadata": {}}' \
  -H "content-type: text/plain;charset=UTF-8" \
  -H "Authorization: Bearer $TOKEN" \
  --output "public/camino.remix" \
  "$AMP_URL/x/apps/export"
```

## Cloud Agent

### Copy .remix to /static

Curl: `-F, --form <name=content>`

```sh
CLOUD_URL=http://127.0.0.1:8080/

CLOUD_URL=https://agt-dev.remixlabs.com
WS="simon"
DB="camino"
```

# 0) Check what workspaces exist

```
curl -X GET -H "Authorization: Bearer $TOKEN_REMIX_DEV" -H "content-type: application/json" "$CLOUD_URL/ws"
curl -X GET -H "Authorization: Bearer $TOKEN_REMIX_DEV" -H "content-type: application/json" "$CLOUD_URL/ws/$WS"
```

# 1) Create a new WorkSpace

```
curl -X POST -H "Authorization: Bearer $TOKEN_REMIX_DEV" -H "content-type: application/json" -d '{"name": "$WS"}' "$CLOUD_URL/ws"
```

### Create a DB

use a .remix file!

# 2) run permission for anon for get

```
curl  -X POST \
  -H "Authorization: Bearer $TOKEN_REMIX_DEV" \
  -F subject=user/_rmx_anon_user \
  -F resource=agent/$DB/get_all \
  -F role=runner \
  "$CLOUD_URL/grant-permission/$WS"
```

# 3) run permission for anon for PATCH

```
curl  -X POST \
  -H "Authorization: Bearer $TOKEN_REMIX_DEV" \
  -F subject=user/_rmx_anon_user \
  -F resource=agent/$DB/patch \
  -F role=runner \
  "$CLOUD_URL/grant-permission/$WS"
```

# 4) run permission for a user for save & delete

wm.j.howard@gmail.com

```
curl  -X POST \
  -H "Authorization: Bearer $TOKEN_REMIX_DEV" \
  -F subject=user/wm.j.howard@gmail.com \
  -F resource=agent/$DB/save \
  -F role=runner \
  "$CLOUD_URL/grant-permission/$WS"
```

```
curl  -X POST \
  -H "Authorization: Bearer $TOKEN_REMIX_DEV" \
  -F subject=user/wm.j.howard@gmail.com \
  -F resource=agent/$DB/delete \
  -F role=runner \
  "$CLOUD_URL/grant-permission/$WS"
```
