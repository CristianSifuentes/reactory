import { useReducer } from "react";

const initialState = {
  counter: 10
}
type ActionType = {
  type: 'increment' | 'decrement' | 'custom';
  payload?: number;
}

//reducer will always return a new state
//What is a reducer?
//A reducer is a function that takes the current state and an action as arguments and returns a new state.
//The reducer function is a pure function, meaning it does not have side effects and does not modify the state directly.  
//It is a function that takes two arguments: the current state and an action. The action is an object that describes what happened and may contain additional data.
//The reducer function returns a new state based on the current state and the action.
const reducerCounter = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
      case 'increment':
        //whats is a spread operator?
        //The spread operator is a syntax that allows you to expand an iterable (like an array or an object) into its individual elements.
        //In this case, it is used to create a new object with the same properties as the current state, but with the counter property incremented by 1.
        //The spread operator is used to create a new object with the same properties as the current state, but with the counter property incremented by 1.
        return { ...state, counter: state.counter + 1 }
      case 'decrement':
        return { ...state, counter: state.counter - 1 }
      case 'custom':
        //The payload property is optional and can be used to pass additional data to the reducer.  
        //In this case, it is used to pass a custom value to increment or decrement the counter.
        //The payload property is optional and can be used to pass additional data to the reducer.
        //In this case, it is used to pass a custom value to increment or decrement the counter.
        return { ...state, counter: state.counter + (action.payload || 0) }
      default:
        return state
    }
}
export const CounterRed = () => {
 /// whats is a useReducer?
  //useReducer is a hook that is used to manage state in a React component. 
  //It is an alternative to useState and is used when the state logic is complex or when the next state depends on the previous one.
  //useReducer takes two arguments: a reducer function and an initial state.  
  //It returns an array with two elements: the current state and a dispatch function that is used to send actions to the reducer.
  //The dispatch function is used to send actions to the reducer, which will then update the state based on the action type.
  const [state, dispatch] = useReducer(reducerCounter, initialState);

  return (
    <>
      <div>Conter: {state.counter}</div>
      <button  onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button  onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button  onClick={() => dispatch({ type: 'custom', payload: 10 })}>Custom +10</button>
    </>
  )
}
