import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Car from "./Car/Car";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Car name="CarName" year={1000} model={"CarModel"} />
        <Car name={"Maschina"} year={1999} model={"Narnia"} />
    </React.StrictMode>,
    document.getElementById("root")
);
