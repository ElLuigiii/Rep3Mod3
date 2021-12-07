import React,{useEffect,useState} from "react";
import NavBar from "./Componentes/NavR&M";
import Character from "./Componentes/Personajes";
import Pagination from './Componentes/Nex&Previous'
import Hooks from "./Contador/Hook";
import Appcontador from "./Contador/Appcontador";
import Presentacion from "./Contador/titulo";


export default function App(){
    const [personajes, setPersonajes] = useState([])
    const [info, setInfo] = useState({})
    const UrlApi = 'https://rickandmortyapi.com/api/character'
    const FetchApi = (url)=>{
        fetch(url)
        .then(respuesta=> respuesta.json())
        .then(data=> {setPersonajes(data.results); setInfo(data.info)})
        .catch(error=>console.log(error))
    }
    useEffect(() => {
        FetchApi(UrlApi)
    }, [])

    const onPrev=()=>{
        FetchApi(info.prev)
    }
    const onNext=()=>{
        FetchApi(info.next)
    }

    return(
        <>
        <Presentacion/>
        <div id='contadores'>
          
          <Appcontador/>
          <Hooks/>
        </div>
    <NavBar titulo='rick y morty' />
    <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>

    <div className="contenedor-grid">
        <Character personajes={personajes}/>
    </div>
    </>
    )
   
}