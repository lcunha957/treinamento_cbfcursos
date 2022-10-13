import React from 'react';
import Dados from './Dados';
import './Corpo.css';
export default function Corpo() {
    const cnl=() => {return 'CBF Cursos'}; 
    const ytb = 'https://www.youtube.com/watch?v=CsCP8ZFySg4&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC&index=6';
    const crs = 'React.js';
    const somar =(v1,v2) =>{ return v1+v2 }
    
    return(
        <section className='bode'>
        <h2 className='topo'> Curso de react </h2>
        <p>Mantenha-se atualizado conosco! </p>
        <Dados
        canal = {cnl}
        youtube ={ytb}
        curso ={crs}
        somar ={somar}
        ></Dados>
        </section>    
    ) 
}