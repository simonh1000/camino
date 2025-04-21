# Camino

An app to support pilgrims

## Dev

```sh
npm run dev
```

## Download a .remix file

```sh
npm run get
```

See curls.md

## Upload

```sh
npx wrangler pages deploy
```

## Fly

```sh
# set permissions
node scripts/camino-permissions.js
```

## Admin

At present we use agent run permissions to determine who can run `save` and other agents

An alternative would be to have a permissions record:

```json
{
  "entity": "permissions",
  "camino": "liesbeth-simon",
  "editors": ["liesbeth.devriend@gmail.com", "simhampton@gmail.com"]
}
```
