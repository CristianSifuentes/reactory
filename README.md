
# React Hooks: Expert Overview & Practical Guide

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
8. [Example 1](#example1)
   - [Overview 1](#overview1)
   - [Code Breakdown](#code-breakdown)
        - Importing `useState`
        - Initializing State
        - Updating State with a Function
        - JSX and Event Handlers
   - [TypeScript Integration](#typescript-integration)
   - [Best Practices](#best-practices)
   - [Conclusion](#conclusion)
9. [Example 2](#example-2)
   - [Overview 2](#overview-2)
   - [Defining TypeScript Interfaces](#defining-typescript-interfaces)
   - [Setting Up Initial State](#setting-up-initial-state)
   - [Implementing Login Logic](#implementing-login-logic)
   - [Conditional Rendering](#conditional-rendering)
   - [Rendering the Component](#rendering-the-component)
   - [Expert Notes](#expert-notes)
   - [Conclusion 2](#conclusion-2)
10. [Example 3](#example-3)
    - [Overview 3](#overview-3)
    - [Initial Setup](#initial-setup)
    - [Action Type Definition](#action-type-definition)
    - [Reducer Function Explained](#reducer-function-explained)
    - [Key Concepts](#key-concepts)
    - [What is useReducer?](#what-is-usereducer)
    - [Output Behavior](#output-behavior)
    - [Best Practices](#best-practices)
    - [When to Use `useReducer`](#when-to-use-usereducer)
    - [Conclusion 3](#conclusion-3)

 

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

# Example 1

## Overview 1

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

## Conclusion 1

The `useState` hook is foundational in React. This example is a perfect stepping stone to master stateful logic in functional components.

Key takeaways:

- `useState` provides value and setter pair
- Re-renders are triggered automatically
- Functions like `increment` abstract logic for cleaner JSX
- TypeScript enhances safety and documentation

---

# Example 2


## Overview 2

We build a component that tracks a `User` object with properties `uid` and `name`. It simulates logging in and conditionally renders user data.

---

## Defining TypeScript Interfaces

```tsx
interface User {
    uid: string;
    name: string;
}
```

- Defines the shape of the user object.
- Enables type safety and autocompletion in `useState`.

---

## Setting Up Initial State

```tsx
const [user, setUser] = useState<User>({
  uid: '',
  name: ''
});
```

- Initializes `user` as an empty object matching the `User` interface.
- The generic `<User>` ensures type safety.
- `setUser` updates the `user` state.

---

## Implementing Login Logic

```tsx
const login = () => { 
  setUser({
    uid: 'ABC123',
    name: 'Fernando'
  });
}
```

- When the `login` button is clicked, it sets the user object to hardcoded credentials.
- Could be replaced with a real API call in production.

---

## Conditional Rendering

```tsx
{
  (!user)
    ? <pre>Not found user:</pre>
    : <pre>{ JSON.stringify(user) }</pre>
}
```

- Displays different content depending on whether a user exists.
- Note: since `user` is always initialized (even if empty), this condition will always render the `user` object.
- A better check would be `!user.uid`.

---

## Rendering the Component

```tsx
return (
  <div className="mt-5">
      <h3>User: useState</h3>
      <button onClick={login} className="btn btn-outline-primary">login</button>
      ...
  </div>
);
```

- Includes a login button styled with Bootstrap.
- Displays user info in `<pre>` format using `JSON.stringify()`.

---

## Expert Notes

| Concern                     | Expert Practice                          |
|-----------------------------|------------------------------------------|
| Type inference              | Always declare type explicitly with `<User>` |
| Object checks               | Use `!user.uid` instead of `!user`       |
| Avoid magic values          | Store temp users in constants            |
| JSON rendering              | Ideal for debug, avoid in production     |

---

## Conclusion 2

This example demonstrates:

- Using `useState` with complex object types.
- Managing user login simulation.
- Conditional rendering based on object state.
- Best practices for type safety and readability.

---

## Example 3


## Overview 3

`useReducer` is a powerful React hook for managing complex state logic in a clean and predictable way. It provides an alternative to `useState` and is especially helpful when state transitions depend on previous state or involve multiple actions.

---

## Initial Setup

```tsx
import { useReducer } from "react";

const initialState = {
  counter: 10
}
```

- `initialState` defines the starting state of the `counter`.
- This state will be managed by our reducer function.

---

## Action Type Definition

```tsx
type ActionType = {
  type: 'increment' | 'decrement' | 'custom';
  payload?: number;
}
```

- `ActionType` is a union type defining valid `type` values.
- `payload` is optional and only needed for the `'custom'` case.

---

## Reducer Function Explained

```tsx
const reducerCounter = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    case 'custom':
      return { ...state, counter: state.counter + (action.payload || 0) }
    default:
      return state;
  }
}
```

### Key Concepts

- **Pure Function**: Reducers must be pure, without side effects.
- **Spread Operator**: `{ ...state, counter: ... }` ensures immutability by copying state.
- **Payload Usage**: `payload` allows dynamic updates like custom increments.

---

## What is useReducer?

- `useReducer` manages state with a reducer function.
- It returns an array: `[state, dispatch]`.
- `dispatch()` is used to send actions that the reducer interprets.

---

## Full Component: CounterRed

```tsx
export const CounterRed = () => {
  const [state, dispatch] = useReducer(reducerCounter, initialState);

  return (
    <>
      <div>Counter: {state.counter}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'custom', payload: 10 })}>Custom +10</button>
    </>
  )
}
```

### Output Behavior

| Action     | State Change        |
|------------|---------------------|
| Increment  | `counter += 1`      |
| Decrement  | `counter -= 1`      |
| Custom     | `counter += payload`|

---

## Best Practices

- Keep reducer functions pure and stateless.
- Use action types consistently and descriptively.
- Combine with TypeScript to ensure strong type safety.

---

## When to Use `useReducer`

- Complex state transitions.
- State updates based on previous state.
- Better testability and organization.

---

## Conclusion 3

React’s `useReducer` hook is a master tool for managing state transitions in advanced applications. Whether you’re building dynamic forms, reducers with multiple actions, or simply avoiding prop drilling, `useReducer` is a must-have in your React arsenal.



