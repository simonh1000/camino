# Camino

## Developing

```bash
npm install
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Change Log

-   0.1.0 add coloured icons

## Dependencies

### Get rmx-runtime and file loader

```sh
# ensure you have latest version
npm run up
# copy to project
cd web-components/rmx-remix
npm run build:hosted
cp dist/* ~/code/projects/camino/static
```
