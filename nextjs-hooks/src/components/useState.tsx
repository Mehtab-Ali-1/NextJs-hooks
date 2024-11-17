"use client"
import { useState } from "react";






export default function UseState (){

  const [counter, setCounter] = useState(0);

  function IncreaseFunc () {
    setCounter(counter + 1);
  }


  return (
    <main>
      <h1>Counter : {counter}</h1>
      <button onClick={IncreaseFunc}>Increase</button>
    </main>
  )
}