/* The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are:
-Fetching data from API
-Directly updating the DOM 
-Timers like SetTimeOut and SetInterval
*/

// -- 3 ways to write a useEffect
/*     useEffect(callback)
    useEffect(callback, [])
    useEffect(callback, [dependency]) */

import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count]); // [] When we are using empty array it will
  // excecute the callback function only once

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  );
};
