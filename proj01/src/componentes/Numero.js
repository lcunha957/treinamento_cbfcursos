import React from "react";
import './Numero.css';

export default function Numero(props){
    return (
        <p>
        <p className="estados"> Valor do state num em Numero:{props.num}</p>
        <button onClick={()=>props.setNum(props.num+10)} className="btn"> Soma 10 </button>
        </p>
    )
    }