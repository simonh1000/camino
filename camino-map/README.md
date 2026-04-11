# Google Map

Simple Google Map webcomponent with clickable markers.
Adds a "count" binding which tells fitMap to use just X of the latest markers

## Params

```html
<camino-map
    api-key="abc123"
    center='{"lat":39.47228,"lng":-0.364284}'
    zoom="14"
    options='{"mapTypeId": "satellite"}'
    markers='[{"meta": "itemX", "position": {"lat":39.47228,"lng":-0.364284}, options: {...}}]'
/>
```

`markers` have

- `position` (required)
- `options` (optional) for (https://developers.google.com/maps/documentation/javascript/examples/advanced-markers-basic-style)[PinElement].

e.g.

```javascript
{background: "#137333", borderColor: "#137333", glyphColor: "white"}
```

**On click**, the entire object (inlcuding other fields, e.g. "meta" in the example) is returned.

Either

- center and no markers
- markers and no center
- center and markers

## Development

- `npm run dev` - starts vite dev server with elm debugger

## Production Build

- `npm run build` - builds the web component asset and outputs to `dist/camino-map.js`

## File Structure

- `/src`
    - `camino-map.js` - source entry for web component
- `/dist` - output from build (ignored by git)
    - `camino-map.js` - bundled asset (used by apps as a static asset)
- `index.html` - dev html entry point (served by vite)
