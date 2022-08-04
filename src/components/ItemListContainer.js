import React from 'react'
import Nav from "./Nav";
import ItemCount from './ItemCount';

const Footer = ({contador,nombre}) => {
    return (
        <footer>
            <p>Hola {nombre}</p>
            <p>El contador va: {contador} </p>
            
            <Nav type="footer"/>
        </footer>
    )
}

export default Footer