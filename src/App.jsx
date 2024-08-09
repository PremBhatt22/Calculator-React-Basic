import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClicked = (elt) => {
    console.log(elt);
    if (elt === "C") {
      setCalVal("");
    } else if (elt === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + elt);
    }
  };

  return (
    <>
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClicked={onButtonClicked} />
      </div>
    </>
  );
}

export default App;
