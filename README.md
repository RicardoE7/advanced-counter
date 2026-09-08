# 🎮 Advanced Counter

An arcade-themed React counter application built to demonstrate state management, side effects, effect cleanup, keyboard interactions, and dependent state using React Hooks.

The project goes beyond a basic increment/decrement counter by adding count history, automatic saving, custom step values, keyboard controls, and reset functionality inside a responsive neon arcade interface.

## 👾 Features

* Increment and decrement the current count
* Define a custom step value
* Track the history of count changes
* Reset the count and clear its history
* Automatically save the current count to `localStorage`
* Display save status feedback
* Increment with the `ArrowUp` key
* Decrement with the `ArrowDown` key
* Clean up timers and keyboard event listeners with `useEffect`
* Responsive neon arcade interface
* Animated score changes and controls
* CRT-inspired visual effects

## 🕹️ Controls

| Action      | Control                         |
| ----------- | ------------------------------- |
| Increase    | Increment button or `ArrowUp`   |
| Decrease    | Decrement button or `ArrowDown` |
| Reset       | Reset button                    |
| Change Step | Step Value input                |

## ⚛️ React Concepts

### `useState`

The application uses multiple pieces of state to manage:

* Current count
* Count history
* Custom step value
* Auto-save status

State updates are coordinated so changes to the counter are correctly reflected in the history and interface.

### `useEffect`

`useEffect` is used for side effects including:

* Automatically saving count changes to `localStorage`
* Registering keyboard event listeners
* Cleaning up pending save timers
* Removing keyboard event listeners when appropriate

The auto-save effect uses a cleanup function to cancel an existing timer when the count changes before the previous save completes.

## 💾 Auto-Save

Whenever the count changes, the application displays:

`Saving...`

After the save completes:

`Changes saved.`

The current count is stored in the browser's `localStorage`.

If another count change occurs before the pending save completes, the previous timer is cleared before a new one begins.

## 🎨 Arcade Theme

The interface is inspired by classic arcade machines and uses:

* Neon cyan and fuchsia accents
* Pixel-style arcade typography
* Animated score changes
* Interactive button animations
* Neon glow effects
* CRT-inspired scanlines and screen effects
* Responsive layouts for different screen sizes

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS v3
* Motion
* Lucide React
* Google Fonts — Press Start 2P
* Browser Local Storage API

## 🚀 Running Locally

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd advanced-counter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## 📁 Project Structure

```text
advanced-counter/
├── src/
│   ├── components/
│   │   └── AdvancedCounter.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

## ✅ Learning Objectives

This project demonstrates:

* Managing multiple state values within a React component
* Updating state based on existing state and user interaction
* Coordinating dependent state
* Performing side effects with `useEffect`
* Using effect dependency arrays
* Implementing effect cleanup
* Working with browser event listeners
* Persisting data with `localStorage`
* Building keyboard-accessible interactions
* Creating a responsive interface with Tailwind CSS
