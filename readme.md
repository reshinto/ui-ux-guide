# UI/UX Guide

## Overview
UI/UX Guide is an Expo-powered React Native application that teaches the fundamentals of mobile interface design through a series of topic-based lessons. Each lesson combines concise explanations, illustrated examples, and actionable exercises so that front-end developers and designers can follow along in Figma while learning layout, typography, color, and component best practices. The app ships with light and dark themes, preloaded custom fonts, and a deep-linkable navigation flow that makes the content easy to explore on any platform supported by Expo.

## Key Features
- **Topic-driven navigation.** The stack navigator in `src/shared/components/Navigation/RootNavigator.tsx` loads every lesson declared in `src/shared/constants/navigation.ts`, injects shared navigation state, and renders a gradient slider (`src/shared/components/Slider/index.tsx`) that lets readers jump between chapters while keeping the current topic number visible in the header.
- **Readable theming and typography.** Custom Forum and Space Mono fonts are preloaded by `src/shared/hooks/useCachedResources.ts`, while `src/shared/styles/palette.ts` and the themed components under `src/shared/components/ThemedComponents` automatically adapt colors for light and dark appearances.
- **Guided lesson layouts.** Each screen pairs SVG title art with reusable building blocks such as `src/shared/components/ScreenSection/index.tsx`, `src/shared/components/InstructionExample/index.tsx`, and `src/shared/components/ShortcutCmdExample/index.tsx` to present narrative text, step-by-step tasks, reference imagery, and keyboard shortcuts sourced from the constants inside `src/shared/constants`.
- **Interactive resources.** Lesson points that include external references use the `openBrowser` helper (`src/shared/utils/helpers/index.ts`) to launch Expo’s in-app browser so learners can explore supporting materials without leaving the app context.
- **Deep linking out of the box.** The navigation container reads the configuration in `src/shared/components/Navigation/LinkingConfig.ts`, which is paired with the custom scheme declared in `app.json`, enabling inbound URLs (for example, `myapp://finding-icons`) to open directly to their corresponding lesson.

## Project Structure
- `src/App.tsx` bootstraps the Expo application, sets the status bar style, and renders the navigation container inside a safe area provider.
- `src/screens` contains the lesson implementations, grouped by topic categories such as layout, typography, color, and components.
- `src/shared` hosts cross-cutting utilities including navigation setup, themed primitives, hooks, styling tokens, and reusable lesson widgets.
- `assets` stores images, SVG artwork, and custom fonts used throughout the instructional content.

## Getting Started
1. **Install dependencies.** From the repository root, run `npm install` to install all project dependencies listed in `package.json`.
2. **Start the development server.** Launch the Expo bundler with `npm run start`. The Expo CLI will display options to open the project on:
   - an iOS simulator (`npm run ios`),
   - an Android emulator (`npm run android`), or
   - the web (`npm run web`).
3. **Open the app.** Scan the QR code with the Expo Go app or choose a target platform from the CLI menu. The splash screen and fonts load via `src/shared/hooks/useCachedResources.ts`, after which the Root screen appears.

## Running the Lessons
- Swipe or drag the slider at the top of the interface to move between chapters, or tap the **Scroll** button on the cover screen (`src/screens/RootScreen/index.tsx`) to jump into the table of contents.
- The contents view (`src/screens/ContentsScreen/index.tsx`) organizes lessons into categories defined in `src/shared/constants/contents.ts`; selecting any entry loads the associated screen and updates the topic tracker in the header (`src/shared/components/ScreenHeader/index.tsx`).
- Many lessons include follow-along instructions that reference downloadable assets and keyboard shortcuts. These are defined in the constants under `src/shared/constants` so you can localize or expand the curriculum by editing data rather than duplicating layouts.

## Customization Tips
- **Add a new lesson:** declare it in `src/shared/constants/contents.ts`, register the screen component in `src/shared/constants/navigation.ts`, and create the corresponding file inside `src/screens`.
- **Update theming:** adjust the palettes and gradients in `src/shared/styles/palette.ts`. The themed components will automatically pick up the new values across the app.
- **Extend helper utilities:** centralize navigation logic or external integrations in `src/shared/utils` so every screen can reuse the same behaviors.

## Useful Commands
- `npm run start` – starts the Expo development server.
- `npm run ios` – opens the app in the iOS simulator (macOS only).
- `npm run android` – opens the app in an Android emulator.
- `npm run web` – runs the project in a browser via Expo for web.

Happy learning and designing!
