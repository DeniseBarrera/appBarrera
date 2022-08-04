import {useState} from "react"
import React from 'react'
import App from "./App"

const ItemCount = ({aumentar, resetear, disminuir}) => {
    const [contador, setContador] = useState(0)

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

    return (
    <>
    <div>compra</div>
    
    <main>
        <button onClick={aumentarContador}>Aumenta</button>
        <button onClick={resetearContador}>Reset</button>
        <button onClick={reducirContador}>Disminuye</button>
    </main>
    
    </>
    )
}

export default ItemCount