/* useRef is a react Hook that allow us to create mutable variables
 which will not re-render the component. 
 useRef is also used for accessing DOM elements.*/
import { useEffect, useState, useRef } from "react";

export const UseRef = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export const UseRef2 = () => {
  const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  };
  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click here</button>
    </>
  );
};
