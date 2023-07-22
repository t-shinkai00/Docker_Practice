import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [arg1, setArg1] = useState<string>("");
  const [arg2, setArg2] = useState<string>("");
  const [method, setMethod] = useState<string>("add");
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const methodOptions = [
    { value: "add", text: "+" },
    { value: "sub", text: "-" },
    { value: "mul", text: "×" },
    { value: "div", text: "÷" },
  ];

  const calc = () => {
    const endpoint = `/api/${method}?arg1=${arg1}&arg2=${arg2}`;
    axios
      .get(endpoint)
      .then((res) => {
        if (res.status === 200) setResult(res.data.result);
        setMessage("");
      })
      .catch((e) => {
        setResult(null);
        setMessage("Error: " + e.response.data.detail[0].msg);
        console.log(e.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="calclator">
          <input className="arg1" type="number" value={arg1} onChange={(e) => setArg1(e.target.value)} />
          <select className="method-select" value={method} onChange={(e) => setMethod(e.target.value)}>
            {methodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                <label>{option.text}</label>
              </option>
            ))}
          </select>
          <input className="arg2" type="number" value={arg2} onChange={(e) => setArg2(e.target.value)} />
          <button onClick={() => calc()}>=</button>
          <p className="result">{result}</p>
          <p className="message">{message}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
