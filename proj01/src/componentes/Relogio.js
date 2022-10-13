import React from 'react';
import './Relogio.css';
export default function Relogio(){

    
return(
  <p className="cuco">{
      new Date().toLocaleTimeString()
  }</p>  
)    
}