
# 📘 React Hooks: Expert Overview & Practical Guide

React Hooks are special functions that allow you to use React features (like state and lifecycle methods) inside functional components—**without using classes**. These built-in Hooks simplify managing state, side effects, references, context access, and even performance optimization.

---

## Table of Contents

1. [State Hooks](#state-hooks)
   - useState
   - useReducer
2. [Context Hooks](#context-hooks)
   - useContext
3. [Reference Hooks](#reference-hooks)
   - useRef
4. [Effect Hooks](#effect-hooks)
   - useEffect
   - useLayoutEffect
   - useInsertionEffect
5. [Performance Hooks](#performance-hooks)
   - useMemo
   - useCallback
   - useImperativeHandle
6. [Other Advanced Hooks](#other-advanced-hooks)
   - forwardRef
   - useDebugValue
7. [Custom Hooks](#custom-hooks)
8. [Overview](#overview)
9. [Code Breakdown](#code-breakdown)
    - Importing `useState`
    - Initializing State
    - Updating State with a Function
    - JSX and Event Handlers
10. [TypeScript Integration](#typescript-integration)
11. [Best Practices](#best-practices)
12. [Conclusion](#conclusion)
13. [Overview](#overview)
14. [Defining TypeScript Interfaces](#defining-typescript-interfaces)
15. [Setting Up Initial State](#setting-up-initial-state)
16. [Implementing Login Logic](#implementing-login-logic)
17. [Conditional Rendering](#conditional-rendering)
18. [Rendering the Component](#rendering-the-component)
19. [Expert Notes](#expert-notes)
20. [Conclusion](#conclusion)
---

## State Hooks

### `useState`
Adds local state to a functional component. Returns a stateful value and a setter function.

### `useReducer`
Manages complex state logic using a reducer function. Ideal for apps with many state transitions.

---

## Context Hooks

### `useContext`
Subscribes to a React context without nesting your components in Consumer tags. Great for theming, authentication, and shared global data.

---

## Reference Hooks

### `useRef`
Creates a mutable object that persists across renders. Commonly used for accessing DOM elements or avoiding unnecessary renders.

Also useful as a performance optimization when storing values that should not trigger re-renders.

---

## Effect Hooks

### `useEffect`
Handles side effects in a component. Runs after every render by default or only when specified dependencies change.

### `useLayoutEffect`
Same as `useEffect`, but fires **after all DOM mutations** and **before the browser paints**. Ideal for synchronously reading layout from the DOM.

### `useInsertionEffect`
Runs before DOM mutations are made visible. Often used for injecting styles or layout adjustments at the right moment.

---

## Performance Hooks

### `useMemo`
Memoizes computationally expensive functions so they only re-execute when dependencies change.

### `useCallback`
Memoizes function references to avoid re-creating functions on each render, which helps prevent unnecessary child renders.

### `useImperativeHandle`
Customizes the instance value that is exposed when using `ref` in parent components. Useful in combination with `forwardRef`.

---

## Other Advanced Hooks

### `forwardRef`
Allows you to forward a `ref` from a parent component to a child component's DOM node or React element.

### `useDebugValue`
Displays custom debug values in React DevTools for custom hooks.

---

## Custom Hooks

React lets you define **custom hooks** to encapsulate and reuse logic. They must follow the **Rules of Hooks**:

- Only call hooks at the top level of components.
- Do not call hooks inside loops, conditions, or nested functions.

Custom hooks are prefixed with `use` and combine one or more built-in hooks to model specific behavior.

```tsx
function useTimer(initial = 0) {
  const [time, setTime] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
```

---

## Conclusion

React Hooks are a powerful way to structure your components. Mastering them enables:

- Cleaner and more readable logic
- Better state and lifecycle management
- Improved performance
- More reusable and testable code

Explore them in depth and build your own custom hooks to level up as a React developer.

---


## Overview

This example demonstrates the `useState` hook for managing a numeric counter. The component:

- Initializes the state at `0`
- Increments the counter by 1 or 2
- Resets the counter to 0

---

## Code Breakdown

### Importing `useState`

```tsx
import { useState } from 'react';
```

React provides `useState` as a named export. It's essential for enabling local component state in functional components.

---

### Initializing State

```tsx
const [counter, setCounter] = useState(0);
```

- `counter` is the current value of the state.
- `setCounter` is the function to update that value.
- `useState(0)` initializes the counter with a value of 0.
- Type inference automatically sets `counter` as a `number`.

---

### Updating State with a Function

```tsx
const increment = (num: number): void => {
  setCounter(counter + num);
}
```

- This function increments the current `counter` by a dynamic value `num`.
- The `void` return type is explicit but not mandatory.
- `setCounter` triggers a re-render when the state changes.

---

### JSX and Event Handlers

```tsx
return (
  <div className='mt-5'>
      <h3>Counter: useState</h3>
      <span>Value: { counter }</span>
      <br/>
     <button  onClick={() => increment(1)} type="button" className="btn btn-primary mt-2">+1</button>
     <button  onClick={() => increment(2)} type="button" className="btn btn-primary mt-2">+2</button>
     <button  onClick={() => setCounter(0)} type="button" className="btn btn-danger mt-2">reset</button>
  </div>
);
```

- Three buttons call the increment or reset logic using arrow functions.
- `+1` and `+2` buttons call `increment(1)` and `increment(2)`, respectively.
- The `reset` button uses `setCounter(0)` to restore initial state.
- `className` is used for styling with Bootstrap or similar frameworks.

---

## TypeScript Integration

- `useState(0)` infers `number` type automatically.
- `increment` function explicitly declares the parameter `num: number` and return type `void`.
- Ensures strict type checking and better IDE support.

---

## Best Practices

| Practice                     | Why It Matters                                     |
|-----------------------------|----------------------------------------------------|
| Use arrow functions in JSX  | Avoids unnecessary re-renders with inline logic    |
| Parameterize update logic   | Makes the function reusable and testable           |
| Clear naming conventions    | Improves readability (`counter`, `setCounter`)     |
| Reset logic separation      | Keeps UI behavior intuitive and predictable        |

---

## Conclusion

The `useState` hook is foundational in React. This example is a perfect stepping stone to master stateful logic in functional components.

Key takeaways:

- `useState` provides value and setter pair
- Re-renders are triggered automatically
- Functions like `increment` abstract logic for cleaner JSX
- TypeScript enhances safety and documentation

---

