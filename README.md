# Dev Stack Builder

Dev Stack Builder is a responsive React app for exploring popular development technologies and collecting the right tools for a future project. It follows the supplied Penpot design across desktop, tablet, and mobile layouts.

![Dev Stack Builder interface](./ui/full.png)

## Technologies used

- React and React Hooks
- Vite
- JavaScript (ES6+)
- CSS with responsive media queries
- React Toastify
- JSON for catalog data

## Key features

1. **JSON-powered catalog** — 12 technology cards load from a local JSON file and include category, difficulty, rating, badge, and icon details.
2. **Interactive stack builder** — add technologies once, remove individual choices, or clear the entire stack with instant toast feedback.
3. **Responsive Penpot-based UI** — a sticky desktop navbar, mobile hamburger menu, adaptive card grid, responsive stack panel, and polished footer.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## React questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript. React uses it to make component structure easier to read and connect with JavaScript values.

### 2. What is the difference between props and state?

Props are values a parent passes to a child component. State is data a component owns and can update, which causes React to render the changed UI.

### 3. What does the `useState` hook do, and where did you use it?

`useState` stores changing values in a component. This project uses it for the technology list, loading and error states, the mobile menu, and the selected stack.

### 4. What does the `useEffect` hook do, and why did you need it here?

`useEffect` runs work after a component renders. It loads the local technology JSON when the app starts and cleans up the request if the component closes.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list item was added, removed, or updated, so it can update the correct part efficiently.

### 6. What is conditional rendering? Where did you use it?

Conditional rendering shows different UI based on a condition. The stack panel shows an empty message when nothing is selected and a list with a “Remove All” button when it has items.

### 7. How does data move between parent and child components?

A parent sends data to a child through props. A child can send an action back by calling a function prop; for example, a technology card calls `onAdd`, and the parent updates the selected stack.
