import React from "react";
import {useState} from "react";
import './App.css'



function App() {


    const [count] = useState(123)

        console.log(count);

    let increase = () => {
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
        </div>

    );
}

export default App
