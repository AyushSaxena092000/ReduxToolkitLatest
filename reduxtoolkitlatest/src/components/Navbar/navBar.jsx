import React from "react";
import { useSelector, useDispatch } from "react-redux";
const  NavBar = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>I am a navBar is {count}</div>;
};

export default NavBar;
