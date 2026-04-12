# Camino Diary - SolidStart Project

This is the main application containing both the frontend user interfaces and the server logic.

## Environment Variables

Make sure to map the required variables, specifically for your Google Maps Map API:
- `VITE_GOOGLE_MAPS_KEY` = your API key (if needed in your component)

## Setup

1. Copy the compiled `camino-map.js` web component into the **`/public`** directory of this project so it can be served as a static asset. 

## Development

- Start the development server using:
  ```bash
  npm run dev
  ```
  The app will be available closely at [http://localhost:3000](http://localhost:3000).

## Building for Production

- Run the following command to generate your production build for Cloudflare:
  ```bash
  npm run build
  ```
