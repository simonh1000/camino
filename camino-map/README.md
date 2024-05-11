# Google Map

Simple Google Map webcomponent with clickable markers.

## Params

```html
<rmx-map-icon
    api-key="abc123"
    center='{"lat":39.47228,"lng":-0.364284}'
    zoom="14"
    options='{"mapTypeId": "satellite"}'
    markers='[{"meta": "itemX", "position": {"lat":39.47228,"lng":-0.364284}, options: {...}}]'
/>
```

`markers` have

-   `position` (required)
-   `options` (optional) for (https://developers.google.com/maps/documentation/javascript/examples/advanced-markers-basic-style)[PinElement].
-   all other fields are ignored for creating the marker

On click, the entire object (inlcuding other fields) is returned.

Either

-   center and no markers
-   markers and no center
-   center and markers

## Development

-   `npm run dev` - starts vite dev server with elm debugger
-   `npm run start` - starts vite dev server without elm debugger
-   `npm run watch` - watches web component src to trigger rebuild and starts dev server (useful for testing dev app with production build of the web component asset)

## Production Build

-   `npm run build` - builds the web component asset and outputs to `dist/rmx-map-icon.js`
-   `npm run npm-watch` - will watch `src/rmx-map-icon.js` for changes to rerun build (useful for hot reloading within apps)

## File Structure

-   `/src`
    -   `rmx-map-icon.js` - source entry for web component
-   `/dist` - output from build (ignored by git)
    -   `rmx-map-icon.js` - bundled asset (used by apps as a static asset)
-   `index.html` - dev html entry point (served by vite)
