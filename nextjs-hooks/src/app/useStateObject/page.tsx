"use client"
import { useState } from "react"



    const App = () => {
    const [details, setDetails] = useState({
        counter:0, myName:"" })
    function increaseCounter () {
        setDetails({counter:details.counter + 1 });
    }

    return (
        <main>
            <div>
                <input onChange={(e) => e.target.value} type="text" placeholder="Enter Your Name" />
                <h1>{details.myName} has clicked {details.counter} times!!</h1>
                <button onClick={increaseCounter}>Increase</button>
            </div>
        </main>
    )}
