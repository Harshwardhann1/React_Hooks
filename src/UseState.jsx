/* useState is a react hook, which creates a 'state variable',
  which helps us to tract state in components and updates user
  interface when state changes. */

/* import React from "react";

const UseState = () => {
  let color = "Red";
  const changeColor = () => {
    color = "Blue";
    console.log(color);
  };
  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
};

export default UseState; */

import React from "react";
import { useState } from "react";

export const UseState = () => {
  const [color, setColor] = useState("Red");

  const changeColor = () => {
    setColor("Blue");
  };
  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
};

export const UseState2 = () => {
  /*   const [brand, setBrand] = useState("Ferrari");
  const [model, setModel] = useState("Roma");
  const [year, setYear] = useState("2023");
  const [color, setColor] = useState("red"); */

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: 2023,
    color: "red",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}.
      </h2>
      <button onclick={changeColor}></button>
    </>
  );
};

export const UseState3 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1); //1
    setCount((count) => count + 1); //2
    setCount((count) => count + 1); //3
    setCount((count) => count + 1); //4
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};
