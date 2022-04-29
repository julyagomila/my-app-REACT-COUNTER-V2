import "./App.css";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="App">
      {counters.map((item, index) => {
        return (
          <div>
            <div className="counter">
              <button
                className="buttonNegative"
                disabled={counters[index] <= 0 && true}
                onClick={() => {
                  const newCounters = [...counters];
                  newCounters[index]--;
                  setCounters(newCounters);
                }}
              >
                -
              </button>
              {counters[index]}
              <button
                className="buttonPositive"
                disabled={counters[index] >= 10 && true}
                onClick={() => {
                  const newCounters = [...counters];
                  newCounters[index]++;
                  setCounters(newCounters);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}

      <button
        className="addCounter"
        onClick={() => {
          const newCounters = [...counters];
          newCounters.push(0);
          setCounters(newCounters);
        }}
      >
        Add counter
      </button>
    </div>
  );
}

export default App;

{
  /* 



<button
className="reset"
onClick={() => {
  setCounters(0);
}}
>
RESET
</button> */
}
