
import React from "react";
import "./LandingPage.css";

export default function LandingPage({ onLaunch }) {
  return (
    <div className="landing-page">

      {/* Background decoration */}
      <div className="landing-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Navbar */}
      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-icon">P</div>
          <span>Placeboard</span>
        </div>

        <div className="nav-label">
          PLACEMENT POSTER STUDIO
        </div>
      </nav>

      {/* Main hero */}
      <main className="hero-content">

        <div className="hero-badge">
          <span className="status-dot"></span>
          YOUR CAMPUS SUCCESS, BEAUTIFULLY DESIGNED
        </div>

        <h1 className="hero-title">
          Celebrate Every
          <br />
          <span>Placement Success.</span>
        </h1>

        <div className="hero-brand-name">
          Placeboard
        </div>

        <p className="hero-description">
          A dedicated poster-designing studio for college
          placement cells. Turn student achievements into
          professional, eye-catching placement posters
          effortlessly.
        </p>

        <div className="hero-actions">
          <button
            className="launch-button"
            onClick={onLaunch}
          >
            Launch Studio
            <span className="launch-arrow">→</span>
          </button>

          <span className="hero-caption">
            Design. Celebrate. Showcase Success.
          </span>
        </div>

        {/* Feature highlights */}
        <div className="feature-row">
          <div className="feature">
            <span className="feature-icon">✦</span>
            <div>
              <strong>Creative Designs</strong>
              <small>Professional posters</small>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">◈</span>
            <div>
              <strong>Easy Customization</strong>
              <small>Make it your own</small>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">↗</span>
            <div>
              <strong>Ready to Export</strong>
              <small>PNG & PDF formats</small>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative poster preview */}
      <div className="poster-decoration">
        <div className="poster-card poster-back">
          <div className="poster-back-circle"></div>
        </div>

        <div className="poster-card poster-front">
          <div className="mini-top">CAMPUS PLACEMENTS</div>
          <div className="mini-line"></div>
          <div className="mini-highlight">Dreams</div>
          <div className="mini-selected">SELECTED AT</div>
          <div className="mini-company">YOUR DREAM COMPANY</div>
          <div className="mini-student"></div>
          <div className="mini-footer">
            CELEBRATING SUCCESS
          </div>
        </div>

        <div className="floating-tag tag-one">
          ✦ Placement Success
        </div>

        <div className="floating-tag tag-two">
          <span>↗</span> Creative Studio
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <span>PLACEBOARD © 2026</span>
        <span>MADE FOR CAMPUS PLACEMENT CELLS</span>
      </footer>

    </div>
  );
}
