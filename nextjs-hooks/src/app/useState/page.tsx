"use client"
import Link from "next/link";
import { useState } from "react";






export default function UseState (){

  const [counter, setCounter] = useState(0);

  function IncreaseFunc () {
    setCounter(counter + 1);
  }

  return (
    <main className="flex flex-col justify-center pt-10 items-center">
      <h1 className="text-4xl font-bold">Counter : {counter}</h1>
      <button className="mt-4 px-4 py-2 bg-sky-700 rounded-full text-white" onClick={IncreaseFunc}>Increase</button>
      <Link className="mt-10 px-4 py-2 bg-red-800 text-white rounded-full" href="/">Back</Link>
    </main>
  )
}