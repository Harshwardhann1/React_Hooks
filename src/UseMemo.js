/* The React useMemo Hook returns a momoized value.(It's like caching
 a value so that it doesn't need to be recalculated.) 
 The useMemo Hook only runs when one of its dependencies gets updated.
 This can improve the performance of the application.
 There is one more hook in react to improve performance, tha is useCallback hook.
 The useMemo and useCallback Hooks are similar. The main difference is:
 - useMemo returns a memoized value.
 - useCallback returns a memoized function.*/

import { useState, useMemo } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }

  //   const result = cubeNum(number);
  const result = useMemo(() => cubeNum(number), [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number: {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter: {counter}</h1>
    </>
  );
};
