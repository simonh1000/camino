# Camino

An app to support pilgrims

## Dev

```sh
npm run dev
```

## Download .remix file from remix-dev

```sh
npm run get
```

See curls.md

## Upload to Cloudflare pages

```sh
npm run deploy
# aka
npx wrangler pages deploy
# and for release candidates
npm run rc
```

## Fly (Cloud Server)

see /remix/fly-mixer

```sh
# set permissions
node scripts/camino-permissions.js
```

## Admin

At present we use agent run permissions to determine who can run key agents

An alternative would be to have a permissions record:

```json
{
    "entity": "permissions",
    "camino": "liesbeth-simon",
    "editors": ["liesbeth.devriend@gmail.com", "simhampton@gmail.com"]
}
```

## Notes

og:image must be Facebook preview with url and size of large image must be at least 600x315px
