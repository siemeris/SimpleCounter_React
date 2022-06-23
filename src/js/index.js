//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
const SecondsCounter = (props) => {
    return (<div className="container-fluid p-0">
        <div className="contador display-2 d-flex bg-dark justify-content-center">
            <div className="text-white">
        <i className="fa-regular fa fa-clock"></i></div>
        <div className="text-white">{props.horas}:</div>
        <div className="text-white">{props.minutos}:</div>
        <div className="text-white">{props.segundos}</div>
            </div> 
    </div>)
}

let contador=0;
let contador2=0;
let contador3=0;

if (contador<10 || contador2<10 || contador3<10 ){
    contador = '0' + contador;
    contador2 = '0' + contador2;
    contador3 = '0' + contador3;
}
setInterval(()=>{contador3++
    if (contador3<10 || contador3 == 0){
        contador3 = '0' + contador3;
    }
    if (contador3 === 24){
        contador3 = 0;
        contador3 = '0' + contador3;
    }},3600000);

setInterval(()=>{contador2++
    if (contador2<10 || contador2 == 0){
            contador2 = '0' + contador2;
    }
    if (contador2 === 60){
            contador2 = 0;
            contador2 = '0' + contador2;
    }},60000);    

setInterval(()=>{contador++
    if (contador<10 || contador ==0){
        contador = '0' + contador;
    }
    if (contador === 60){
        contador = 0;
        contador = '0' + contador;
    }
ReactDOM.render(<SecondsCounter horas={contador3} minutos={contador2} segundos={contador}/>, document.querySelector("#app"));},1000);
     


        

    
    