"use client";

import Link from "next/link";
import { Input } from "postcss";
import { useState } from "react";




export default function InputUseState () {

    const [counter, setCounter] = useState(0)
    const [myName, setMYName] = useState("")

    function counterFunc () {
        setCounter(counter + 1)
    }



    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-10 gap-3">
            <input className="bg-slate-100 text-2xl px-6 py-2 rounded-full" type="text" placeholder="Enter your name" onChange={(e) => setMYName(e.target.value) }/>
            <h1 className="text-5xl font-bold ">{myName} has clicked {counter} times</h1>
            <button className="mt-4 px-4 py-2 bg-sky-700 rounded-full text-white" onClick={counterFunc}>Increase</button>
            <Link className="mt-10 px-4 py-2 bg-red-800 text-white rounded-full"  href="/">Back</Link>
            </div>
        </main>
    )
}