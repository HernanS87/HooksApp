import { useCounter } from "../hooks/useCounter";

export const CountComponent = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn btn-primary mx-1" onClick={() => increment()}>
        <strong>+</strong>
      </button>
      <button className="btn btn-danger mx-1" onClick={() => reset()}>
        <strong>Reset</strong>
      </button>
      <button className="btn btn-primary mx-1" onClick={() => decrement()}>
        <strong>-</strong>
      </button>
    </>
  );
};
