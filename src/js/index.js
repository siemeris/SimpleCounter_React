//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
const SecondsCounter = (props) => {
    return (<div className="container-fluid">
        <div className="contador display-2 d-flex bg-dark">
            <div className="text-white">
        <i className="fa-regular fa fa-clock"></i></div>
        <div className="text-white">0</div>
        <div className="text-white">0</div>
        <div className="text-white">0</div>
        <div className="text-white">0</div>
            </div> 
    </div>)
}

//render your react application
ReactDOM.render(<SecondsCounter  />, document.querySelector("#app"));
