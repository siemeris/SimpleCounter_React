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
        <div className="text-white">{props.digito3}:</div>
        <div className="text-white">{props.digito2}:</div>
        <div className="text-white">{props.digito1}</div>
            </div> 
    </div>)
}
let sec = 0
let min = 0
let hor = 0
function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min < 10) {
            min = '0'+min;
        }else{
            min
        }
        if(min >= 60){
        min = 0;
        hor++;
            if(hor < 10){
                hor = '0'+ hor;
            }
            else{
                hor
            }
        }
        if(hor >=24){
            hor = 0;
        }
    }
}
setInterval(()=>{
    tick()
    if(sec < 10){
        sec = '0'+sec
    }
    ReactDOM.render(<SecondsCounter digito1={sec > 0 ? sec : sec="00"} digito2={min > 0 ? min : min="00"} digito3={hor >0 ? hor : hor="00"}/>, document.querySelector("#app"));}, 1000)
