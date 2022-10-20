import "./App.css";
import React,{useState, useEffect} from 'react';
import Corpo from '../src/componentes/Corpo';
import Relogio from "./componentes/Relogio";
import Numero from "./componentes/Numero";
import Gato from "./componentes/Gato";
import Posts from "../src/Posts";
//import Formulario from ".componentes/Formulario";
function App() {
 const [num, setNum] = useState(10);
 const [ligado,setLigado] = useState(false);
 const [cor,setCor] = useState(1);
 const [contagem, setContagem] = useState(0);
 
 useEffect()(
   () =>  console.log("Pagina carregada"),
   document.title="Contagem" + contagem
 );

 

 // cancela o abrir uma nova página
const cancelar=(obj) =>{
     return obj.preventDefault();
     
}
 const [log,setLog]= useState(false);
 // renderiza conforme o estado
const cumprimento=()=>{
    const hora= new Date().getHours();
    if(hora >=0 && hora<13)
    { return <p>Bom dia</p>
     } else if(hora>13 && hora<18) {
         return <p>Boa tarde</p>
     } else{
         return <p>Boa noite </p>
     }
    
}

const msglogin=()=>{
    return 'usuário está  logado';
}

const msglogoff=() =>{
    return 'usuário favor logar'
}

const vermelho={color:'#f00'}
const verde={color:'#4BAE0D '}
const azul={color:'#00f'}

const RetornarACor=(c)=>{
    if(c===1){
        return vermelho;
    }
    else if(c===2){
        return verde;
    }
    else{
        return azul;
    }
}
const mudarACor =() =>{
    setCor(cor+1)
    if(cor>2){
        setCor(1)        
    }

}
// automatizar o trabalho do botão: btnCor
setInterval(mudarACor,5000);


return(
    <div className="onda">
    <Relogio></Relogio>
    <div className="portaria"> { cumprimento()}</div>
    <div className="sessao"><p> {log?msglogin():msglogoff()}</p><button className="btnSessao" onClick={()=>setLog(!log)}>{log?'logoff':'login'} </button></div>
    <div className="cores" style={RetornarACor(cor)}><h1> Curso do Youtube</h1><button className="btnCor" onClick={()=>mudarACor()}>Muda Cor</button></div>
      <h1 className="Teste01"> Eu sou um teste de css</h1>
    <Gato ligado={ligado} setLigado={setLigado}>
    </Gato>
    <a href='http://youtube.com/cfbcursos' target='_blank' onClick={(e)=>cancelar(e)} rel="noopener noreferrer" className="links">Canal CBF Cursos</a>
           <Corpo className="body"/>
    <p className="ben10"> Valor do state num em App:{num}</p>
       <Numero num={num} setNum={setNum}/>  
       <p>Contagem{contagem}</p>
       <button onClick={() => setContagem(contagem + 1)}>Contar</button>
       <Posts/>
     </div>

  
)
  
}

export default App;
