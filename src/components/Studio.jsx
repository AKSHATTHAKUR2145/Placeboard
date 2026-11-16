
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import ActionToolbar from "./ActionToolbar";
import FloatingToolbar from "./FloatingToolbar";
import CandidateModal from "./CandidateModal";
import LogoCropModal from "./LogoCropModal";
import PosterPreview from "./PosterPreview";

export default function Studio() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/legacy.js";
    script.async = false;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

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
