import { getFCP } from "web-vitals";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyConverter } from "./components/CurrencyConverter";

function App() {
  const cash = useSelector((state) => state.cash);
  const dispatch = useDispatch();

  const addCash = () => {
    dispatch({type:"ADD_CASH",payload:Number(prompt("How much?"))})
  }

  const takeCash = () => {
    dispatch({type:"TAKE_CASH",payload:Number(prompt("How much?"))})
  }



  return (
    
    <div className="App">
      <h1>shaxzod's balance: {cash}</h1>
      <div>
        <button onClick={()=>addCash()}>plus</button>
        <button onClick={()=>takeCash()}>minus</button>
      </div>
      <CurrencyConverter /> 
    </div>
  );
}

export default App;
