import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,multiply }  from './redux/counter/counterSlice';
import NavBar from './components/Navbar/navBar';


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
    <NavBar/>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
      aria-label="Multiply value"
      onClick={() => dispatch(multiply(6))}
    >
      Multiply
    </button>
    </div>
  </div>
  );
}

export default App;
