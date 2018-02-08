import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./components/TodoApp";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoApp/>
    </div > ,
    destination
);