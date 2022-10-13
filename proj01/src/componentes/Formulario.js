import React,{useState} from 'react';
import "./Formulario.css";


export default function Formulario(){
     // lista de carros pra mapear:
 const carros =[
    {categoria:"Esporte", preco:"110000.00", modelo:"Golf GTI"},
    {categoria:"Esporte", preco:"120000.00", modelo:"Camaro"},
    {categoria:"SUV", preco:"85000.00", modelo:"HRV"},
    {categoria:"SUV", preco:"83000.00", modelo:"T-Cross"},
    {categoria:"Utilitário", preco:"120000.00", modelo:"Hillux"},
    {categoria:"Utilitário", preco:"90000.00", modelo:"Ranger"}   
              ];
 
              const ListaCarros = carros.map(
                (d,i) =>
                    <p><li className="lindo" key={i}>índice {i} - {d.categoria} - R$ {d.preco} - {d.modelo}</li></p>
                
             );
              
              
             const [nome,setNome]=useState('Digite seu nome...');
             /*const handleChangeNome=(e) =>{
              setNome(e.target.value) 
             } */
             
             
             const [carro,setCarro] = useState('Escolha o carro')
             const [form,setForm] = useState({"sobrenome": "", "curso": "", "ano": ""})
             
             const HandleFormChange=(y)=>{
              if(y.target.getAttribute('name')===('fsobrenome')){
                  setForm({"sobrenome":y.target.value,"curso":form.curso,"ano":form.ano})
              }
              else if(y.target.getAttribute('name')===('fcurso')){
                 setForm({"sobrenome":form.sobrenome,"curso":y.target.value,"ano":form.ano})   
              }
              else if (y.target.getAttribute('name')===('fano')){
                 setForm({"sobrenome":form.sobrenome,"curso":form.curso,"ano":y.target.value})     
              }
              
             }
             
             return(
                 <div className="cordeParede">
        <p className="carango">Impressão da lista de carros:<ul>{ListaCarros}</ul></p>
        <br/>
        <h1 className="Teste02"> Formulário de Cadastro: </h1>
        <label className="ben857"> Digite seu nome: </label>
       <input type="text" name="fnome" value={nome} onChange={(e)=> setNome(e.target.value)} className="campos"></input>
        <label className="ben857"> Digite seu sobrenome: </label>
    <input type="text" name="fsobrenome" value={form.sobrenome} onChange={(y)=>HandleFormChange(y)} className="campos"></input>
       <label className="ben857"> Digite seu curso: </label>
     <input type="text" name="fcurso" value={form.curso} onChange={(y)=>HandleFormChange(y)} className="campos"> </input>
       <label className="ben857"> Digite seu ano de formatura: </label>
       <input type="text" name="fano" value={form.ano} onChange={(y)=>HandleFormChange(y)} className="campos"></input>
       <p className="ben857"> Nome digitado: {nome} </p>
       <p className="ben857"> Sobrenome digitado: {form.sobrenome} </p>
       <p className="ben857"> Curso digitado: {form.curso} </p>  
       <p className="ben857"> Ano de formatura digitado: {form.ano} </p>  
        <label className="ben857"> Selecione o carro </label>
       <select value={carro} onChange={(e)=> setCarro(e.target.value)} className="campos">
       <option value="Zero"> Escolher o carro </option>
       <option value="HRV"> HRV </option>
       <option value="Golf"> Golf </option>
       <option value="Cruze"> Cruze </option>
       <option value="Camaro"> Camaro </option>
       <option value="Argo"> Argo </option>
       </select>       
       <p className="ben857"> Carro selecionado: {carro} </p> 
    
                 </div>
             )
             
}
