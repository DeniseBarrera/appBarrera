import {useState , useEffect} from "react"
import React from 'react'
import App from "./App"

const ItemCount = ({aumentar, resetear, disminuir}) => {

    const [titulo, setTitulo] = useState("Cargando..")
    const [contador, setContador] = useState(0)
    const [confirmed,setConfirmed] = useState(false)
    console.log("se crea el estado")

    useEffect(()=>{
        setTitulo("Cargando...")

        const simulacroPedido = new Promise((res,rej)=>{
            setTimeout(() => {
                res("OK")
            }, 2000)
        })
        
        simulacroPedido.then((resultado)=>{
            console.log({resultado})
        })
        simulacroPedido.catch((error)=>{})
    }, [confirmed])

    console.log("Render")

    const aumentarContador = () => {
        console.log("aumentarContador")
        //if(contador>5){
        setContador(contador + 1)
       // }
    }

    const resetearContador = () => {
        console.log("resetearContador")
        setContador(0)
    }
    const reducirContador = () => {
        console.log("disminuirContador")
        setContador(contador - 1)
    }

    //const confirmar = () => {}
        //setConfirmed(!confirmed)

    return (
    <>
    
    <main>
       
        <p id="parrafo">El Contador va: {contador}</p>
        <button onClick={aumentarContador}>Aumenta</button>
        <button onClick={resetearContador}>Reset</button>
        <button onClick={reducirContador}>Disminuye</button>
    </main>
    
    </>
    )
}

export default ItemCount