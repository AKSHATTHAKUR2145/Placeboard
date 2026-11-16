# IIPS Placement Poster Generator (React + Vite)

This project reorganizes the supplied IIPS Placement Poster Generator into a React application with a clear `src/` and `components/` structure. The original poster-editor engine and its existing features are preserved in `public/legacy.js`.

## Requirements
- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
iips-placement-poster-react/
├── public/
│   └── legacy.js                 # Original editor logic and poster layout engine
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx           # Main settings sidebar
│   │   ├── ActionToolbar.jsx     # Undo/redo, layer and alignment actions
│   │   ├── FloatingToolbar.jsx   # Selected-element controls
│   │   ├── CandidateModal.jsx    # Manual entry and Google Sheet import
│   │   ├── LogoCropModal.jsx     # Company logo crop dialog
│   │   └── PosterPreview.jsx     # Poster canvas and preview
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Notes
- The editor logic was originally written around DOM IDs and inline event handlers. It is isolated in `public/legacy.js` and loaded after React mounts the component markup so the existing editor behavior continues to work.
- The poster export uses the `html-to-image` and `jsPDF` CDN scripts, and Google Fonts are loaded from Google Fonts. Internet access is needed for those external assets.
- The React components currently act as separated UI sections around the preserved legacy editor. The next refactor step, if desired, is migrating the editor state and handlers into React hooks component-by-component.
