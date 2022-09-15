import React, { useState } from "react";
import "./App.css";
import AddRemoveButton from "./Components/AddRemoveButton";
import DisplayCount from "./Components/DisplayCount";
import Stars from "./Components/Stars";

function App() {
  const [count, setCount] = useState(0);
  const removeOne = (count) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addOne = (count) => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div className="OutBox">
        <div className="InnerBox">
          <div className="LogoBox">
            <h5 className="LogoWords">LOGO</h5>
            <h5 className="LogoWords">menu</h5>
          </div>
          <div className="CounterArea">
            <AddRemoveButton
              addRemoveFunction={removeOne}
              buttonName={"remove 1"}
              count={count}
            ></AddRemoveButton>
            <DisplayCount count={count}></DisplayCount>
            <AddRemoveButton
              addRemoveFunction={addOne}
              buttonName={"Add 1"}
              count={count}
            ></AddRemoveButton>
          </div>
          <div className="StarContainer">
            <Stars count={count}></Stars>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;