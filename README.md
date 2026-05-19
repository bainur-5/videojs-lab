# Video.js Lab

Video.js Lab is a React + TypeScript + Vite portfolio case study for custom video player experiences. It is designed to show advanced frontend architecture around Video.js without adding a backend or real production data source.

## Project goals

- Showcase custom Video.js player UI as a portfolio-quality product experience.
- Keep the codebase clean, typed and easy to extend.
- Use mock data to model multiple player concepts before every player is fully implemented.
- Demonstrate reusable React components, custom hooks and responsive styling.

## Stack

- React
- TypeScript
- Vite
- Video.js loaded from the official CDN at runtime
- Plain CSS
- Mock data only

> Note: `npm install video.js` was blocked by the current registry policy in this environment, so the reusable player loads Video.js from the CDN. If your environment allows npm registry access, you can install the package and switch the wrapper to package imports later.

## Current features

- Portfolio-style home page with hero copy, technology highlights and featured demos.
- Player catalog page with five Video.js demo concepts.
- About page explaining the case-study focus.
- Reusable layout, UI and video components.
- Working reusable Video.js player wrapper.
- Keyboard shortcuts prepared for the active player:
  - `Space` toggles play / pause.
  - `ArrowLeft` seeks backward 10 seconds.
  - `ArrowRight` seeks forward 10 seconds.
- Analytics hook that tracks play, pause, seek, ended and watch-time state.
- Responsive CSS for desktop, tablet and mobile layouts.

## Demo roadmap

The mock data currently prepares these player experiences:

1. Basic custom Video.js player — implemented as the first working reusable demo.
2. YouTube-style player — planned for custom controls and engagement UI.
3. Course player with playlist — planned for lesson playlists and progress states.
4. Premium movie-style player — planned for cinematic metadata and polished overlays.
5. Analytics player — planned for deeper event dashboards and telemetry visuals.

## Project structure

```txt
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      PageLayout.tsx
    video/
      BaseVideoPlayer.tsx
      PlayerCard.tsx
      PlayerShell.tsx
    ui/
      Button.tsx
      Card.tsx
      SectionTitle.tsx
  pages/
    HomePage.tsx
    PlayersPage.tsx
    AboutPage.tsx
  data/
    players.ts
  hooks/
    useVideoAnalytics.ts
    useKeyboardShortcuts.ts
  styles/
    globals.css
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the project:

```bash
npm run lint
```

## How to continue building

Recommended next steps:

1. Replace the planned-state cards with routeable detail pages or modal demos.
2. Implement the YouTube-style player controls around `BaseVideoPlayer`.
3. Add playlist state to the course player using the existing `PlayerDemo` data model as a starting point.
4. Expand `useVideoAnalytics` with percentage watched, quartile events and session identifiers.
5. Move Video.js loading to package imports if your registry allows installing `video.js`.
