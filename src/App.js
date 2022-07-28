import React, { useState } from "react";
import "./App.css";
import ButtonComp from "./Components/ButtonComp";

function App() {
  const [count, setCount] = useState("0");
  const [reset, setReset] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleCounter = (el) => {
    if (reset) {
      setCount(String(el)); //String(el) converts number to string
      setReset(false); //reset to false
      return;
    }

    if (el === 0 && count === "0") return; //if count is 0 and user clicks 0, do nothing
    const res =
      el > "0" && count === "0" ? String(el) : count.concat(String(el)); //if el is greater than 0 and count is 0, then concat the string

    setCount(res);
  };

  const handleOperation = () => {
    let s = count.replace(/^0+/, ""); //remove the leading 0s
    let val = "";

    if (s.includes("+")) {
      val = s.split("+");
      val = Number(val[0]) + Number(val[1]); //add the two numbers
    } else if (s.includes("-")) {
      val = s.split("-");
      val = Number(val[0]) - Number(val[1]); //subtract the two numbers
    } else if (s.includes("*")) {
      val = s.split("*");
      val = Number(val[0]) * Number(val[1]); //multiply the two numbers
    } else if (s.includes("/")) {
      val = s.split("/");
      val = Number(val[0]) / Number(val[1]); //divide the two numbers
    }
    setCount(String(val));
    setReset(true);
  };

  const resetvalues = () => {
    setCount("0");
    setReset(true);
  };

  return (
    <div className="app">
      <div id="results">
        <p>{count}</p>
      </div>
      <div>
        <div className="operator_btn">
          <button onClick={resetvalues}>
            <small>Reset</small>
          </button>
          <button onClick={() => handleCounter("+")}>+</button>
          <button onClick={() => handleCounter("-")}>-</button>
          <button onClick={() => handleCounter("*")}>x</button>
          <button onClick={() => handleCounter("/")}>/</button>
          <button onClick={() => handleOperation()}>=</button>
          <div className="btns">
            {arr.map(
              (
                el //map the array and return the buttons
              ) => (
                <ButtonComp key={el} fn={() => handleCounter(el)}>
                  {el}
                </ButtonComp>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
