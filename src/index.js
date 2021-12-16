import React from "react";
import { useState} from "react";
import ReactDOM from "react-dom";
import './App.css'


let count = 0;

 let increase = () => {
     console.log("button clicked!")
}

ReactDOM.render(
    <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
);
