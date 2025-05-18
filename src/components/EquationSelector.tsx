import { useMath } from "./MathContext";

export const EquationSelector = () => {
  const { dispatch } = useMath();

  const handleChange = () => {
    dispatch({
      type: "SET_EQUATION",
      payload: {
        id: "eq2",
        formula: "y = 2x² - 3x + 5",
        coefficients: [2, -3, 5]
      }
    });
  };

  return <button onClick={handleChange}>Switch Equation</button>;
};
