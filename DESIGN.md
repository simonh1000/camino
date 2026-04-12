# Our Camino Diary

## Frontend overview

This is small app with 2 main pages

- /pilgrims - for admins: create new diary entries
- / - public: view diary entries and the route map

It will be written in solidjs, and use the camino-app webcomponent for the mapping part.

The pilgrims on a longwalking holiday and updating their friends along the way. Each day has a colour of the rainbow, in order. So day 1 is red, day 2 is orange, day 3 is yellow, day 4 is green, day 5 is blue, day 6 is indigo, day 7 is violet, day 8 is red again, and so on.

### /pilgrims

Has the following sections

- header (with title and icon in top right)
- A waves section that shows the wave count
- Either:
  - if password available: "Write an update" a textarea and two buttons "Post" and "Cancel"
    - each post includes the latlng which the browser will provide
  - if password not available: a password entry box and a "Login" button
- a list of posts, each with a edit button
- a footer with the version number of the code and a button to switch to /

### /

Has the following sections

- header ("Where are we" and icon)
- map with markers for each post
- two buttons:
  - "Wave" - triggers the wave count to increment
  - "Refresh" - reloads the locations
- the main section shows the posts in reverse chronological order. Each post has a bullet point in a particular colour, and the same colour is used for the marker on the map.

### The map webcomponent

The map on the public page is rendered using the `<camino-map>` element. Here is a summary of its interface from `camino-map.js`:

**Attributes (Objects/Arrays must be passed as JSON strings):**

- `api-key` (string): Your Google Maps API key.
- `zoom` (number): Target zoom level.
- `center` (string): JSON representation of `{ lat: number, lng: number }`.
- `options` (string): JSON representation of `google.maps.MapOptions` (e.g. `{ zoomControl: false }`).
- `markers` (string): JSON representation of an array of marker objects. Each marker should have a `position: {lat, lng}` and an optional `options` object. The `options` are fed to `PinElement`, which natively supports setting colors (`background`, `borderColor`), allowing us to set marker colors to match the daily rainbow.
- `count` (number): Automatically scopes the bounds of the map to only fit the top `N` markers in the array.

**Events:**

- `marker-clicked`: Emitted when clicking a marker. `event.detail` exposes the original marker object.

## Authentication

The password is a simple string, and is stored in local storage, and read when loading the page.

The password can be added as a query parameter to the /pilgrims page, e.g. /pilgrims?password=password. If detected, and is correct, copy to local storage

What do you propose for passing this to the backend on the admin routes? I like the idea of the Authorization header, if feasible

## Other things

Let me know where to put the static assets - the main logo is `conch.png` and there also assets for use with og fields

## Backend

There is also a backend, that needs to have the following routes:

- GET /posts - returns all posts (anon access)
- POST /wave - updates the wave count (anon access)

- GET /wave - returns the wave count (admin access)
- POST /post - creates a new post (admin access)
- DELETE /post/:id - deletes a post (admin access)
- PATCH /post/:id - updates a post (admin access)

```typescript
{
  "id": uuid;
  "comment": string;
  "position": {
      "lat": number;
      "lng": number;
  };
  "poster": string;
  "datetime": datetime; // set by server
}
```

there is also a wave count, which is a number, and can be updated by the /wave route. Think of a object that is stored with an API function that can increment it
