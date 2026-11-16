<<<<<<< HEAD
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
=======
# 🎓 Placeboard – Placement Poster Studio

### Design. Celebrate. Showcase Success.

**Placeboard** is a dedicated poster-designing tool built for college placement cells. It helps placement coordinators create professional, visually appealing placement achievement posters to celebrate students' career milestones.

Instead of manually designing every placement poster, Placeboard provides a customizable studio where users can add student details, company information, photographs, packages, typography, colors, and other design elements — all in one place.

---

## ✨ Features

### 🎨 Poster Designing Studio
- Create professional student placement posters.
- Customize poster layouts, fonts, and colors.
- Add and edit text elements.
- Customize poster backgrounds and decorative elements.
- Drag, resize, and rotate canvas elements.

### 👨‍🎓 Student Management
- Add student details manually.
- Import student information from Google Sheets.
- Upload student photographs.
- Add course, designation, and package details.
- Manage multiple student placement records.

### 🏢 Company Customization
- Upload company logos.
- Crop and adjust company logos.
- Add company and placement information.
- Customize role descriptions and icons.

### ⚙️ Advanced Editing Tools
- Undo and redo operations.
- Move elements forward and backward.
- Duplicate and delete elements.
- Align elements horizontally and vertically.
- Customize typography and color palettes.
- Use predefined layout presets.

### 📤 Export Options
- Export posters as high-quality PNG images.
- Generate PDF versions of posters.
- Create ready-to-share placement achievement designs.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based UI |
| JavaScript | Application functionality |
| Vite | Development server and build tool |
| HTML5 | Application structure |
| CSS3 | Styling and layouts |
| html-to-image | Poster image export |
| jsPDF | PDF generation |
| Google Fonts | Typography |
| Google Sheets | Student data import |

---

## 📁 Project Structure

```text
Placeboard/
│
├── public/
│   └── legacy.js
│
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── ActionToolbar.jsx
│   │   ├── FloatingToolbar.jsx
│   │   ├── CandidateModal.jsx
│   │   ├── LogoCropModal.jsx
│   │   └── PosterPreview.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run Placeboard locally.

### Prerequisites

Make sure you have installed:

- Node.js (18 or newer)
- npm
- Visual Studio Code (recommended)

### 1. Clone the repository

```bash
git clone https://github.com/AKSHATTHAKUR2145/Placeboard.git
```

### 2. Navigate to the project directory

```bash
cd Placeboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

---

## 📦 Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎯 Project Objective

The objective of Placeboard is to simplify the process of designing and managing student placement achievement posters for college placement cells.

It aims to reduce repetitive manual designing work, maintain visual consistency, and make placement announcements more professional and efficient.

---

## 🔮 Future Enhancements

- Modern landing page and product introduction.
- User authentication and role-based access.
- Cloud-based image storage.
- Save and manage poster templates.
- Multiple placement-cell workspaces.
- AI-assisted poster design.
- Centralized student placement data management.
- Cloud-based project storage and sharing.

---

## 👨‍💻 Developer

**Akshat Thakur**

Integrated MCA Student | Developer | Placement Cell Coordinator

- GitHub: [@AKSHATTHAKUR2145](https://github.com/AKSHATTHAKUR2145)

---

## 📄 License

This project is currently developed as a placement-cell poster designing solution. Licensing terms can be added as the project evolves.

---

<p align="center">
  <strong>Placeboard – Placement Poster Studio</strong><br/>
  Design. Celebrate. Showcase Success. ✨
</p>
>>>>>>> de5b8116bac7f2aab21ff2b8670fa0e955a75bd8
