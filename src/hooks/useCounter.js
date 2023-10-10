import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1, negative = true) => {
    if (!negative && counter - value < 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - value);
  };

  const reset = (value = 0) => {
    setCounter(value);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
