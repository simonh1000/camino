# Camino

There is a a script in flymixer to set permissions on agent

## Download a .remix file

See curls.md

## Upload

```sh
npx wrangler pages deploy
```

## Admin

(See flymixer/scripts/camino-permissions.js)

At present we use agent run permissions to determine who can run `save` and other agents

An alternative would be to have a permissions record:

```json
{
  "entity": "permissions",
  "camino": "liesbeth-simon",
  "editors": ["liesbeth.devriend@gmail.com", "simhampton@gmail.com"]
}
```
