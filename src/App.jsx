import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./users";
import Friends from "./Friends";
function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  const handleClick3 = () => {
    alert("button 3 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  const handleClick4 = () => {
    alert("button 4 clicked");
  };
  return (
    <>
      <h3>React Core concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={handleClick3}>Thrid Click</button>
      <button onClick={() => addToFive(3)}>Four</button>
      <button onClick={handleClick4}>my names khan</button>
    </>
  );
}

export default App;
