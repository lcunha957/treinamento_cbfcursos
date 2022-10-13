import React from 'react';
import GatoBranco from './imgs/gato.webp';
import GatoPreto from './imgs/gato2.webp';
import './Gato.css';


export default function Gato(props){

 return (
     <Gato className='cabecalho'>
     <img src={props.ligado?GatoPreto :GatoBranco} className="gatuno"/>
     <button onClick={()=>props.setLigado(!props.ligado)} className="btnEstado">{props.ligado?'Desligar' :'Ligar'} </button>
     <h1> CFB Cursos Youtube</h1>

     </Gato>
 );   
    
}