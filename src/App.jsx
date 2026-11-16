
import React, { useEffect, useState } from "react";

import LandingPage from "./components/LandingPage";

import Sidebar from "./components/Sidebar";
import ActionToolbar from "./components/ActionToolbar";
import FloatingToolbar from "./components/FloatingToolbar";
import CandidateModal from "./components/CandidateModal";
import LogoCropModal from "./components/LogoCropModal";
import PosterPreview from "./components/PosterPreview";

import "./styles.css";

export default function App() {
  const [showEditor, setShowEditor] = useState(false);

  // Keep landing page and editor layouts separate.
  useEffect(() => {
    document.body.classList.toggle(
      "landing-mode",
      !showEditor
    );

    return () => {
      document.body.classList.remove("landing-mode");
    };
  }, [showEditor]);

  // Load the original editor script only when the editor opens.
  useEffect(() => {
    if (!showEditor) return;

    const script = document.createElement("script");
    script.src = "/legacy.js";
    script.async = false;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [showEditor]);

  // Landing page
  if (!showEditor) {
    return (
      <LandingPage
        onLaunch={() => setShowEditor(true)}
      />
    );
  }

  // Existing poster application
  return (
    <main className="app-shell">
      <Sidebar />
      <ActionToolbar />
      <FloatingToolbar />
      <CandidateModal />
      <LogoCropModal />
      <PosterPreview />
    </main>
  );
}
