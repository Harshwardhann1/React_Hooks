/* useCallback is a React Hook that lets you cache a function
 definition between re-renders.
It means, when we use the useCallback Hook, it doesn't create
 multiple instances of same function when re-render happens. 
Instead of creating new instance of the function, it provides
the cached function on re-render of the component.*/

import React, { useCallback, useState } from "react";
import Header from "./components/Header";

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  //   const newFn = () => {};
  const newFn = useCallback(() => {}, []);
  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </>
  );
};
