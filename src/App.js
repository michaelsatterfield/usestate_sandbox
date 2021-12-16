import React from "react";
import {useState} from "react";
import './App.css'



function App() {


    let [count, setCount] = useState(123)

        console.log(count);

    let increase = () => {
       setCount(count += 1)
    }
    let decrease = () => {
        setCount( count -= 1)
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>

    );
}

export default App
