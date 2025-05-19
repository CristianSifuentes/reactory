// MathContext.tsx
import React, { createContext, useReducer, useContext } from "react";

type Equation = {
  id: string;
  formula: string;
  coefficients: number[];
};

type State = {
  activeEquation: Equation;
};

type Action =
  | { type: "SET_EQUATION"; payload: Equation };

const initialState: State = {
  activeEquation: {
    id: "eq1",
    formula: "y = ax² + bx + c",
    coefficients: [1, 2, 1]
  }
};

const MathContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

function mathReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_EQUATION":
      return { ...state, activeEquation: action.payload };
    default:
      return state;
  }
}

export const MathProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mathReducer, initialState);
  return (
    <MathContext.Provider value={{ state, dispatch }}>
      {children}
    </MathContext.Provider>
  );
};

export const useMath = () => {
  const context = useContext(MathContext);
  if (!context) throw new Error("useMath must be used within MathProvider");
  return context;
};
