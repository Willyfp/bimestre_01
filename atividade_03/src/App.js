import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h4>Contador: {counter}</h4>

      <button
        onClick={() => {
          setCounter(counter - value);
          setValue(0);
        }}
      >
        Diminuir
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setCounter(counter + value);
          setValue(0);
        }}
      >
        Aumentar
      </button>

      <br />

      <button onClick={() => setCounter(0)}>Resetar</button>
    </div>
  );
}

export default App;
