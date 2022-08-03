import React from 'react'
import Nav from "./Nav";

const Footer = (greeting) => {
    return (
        <footer>
            <p>Hola {greeting.nombre}</p>
            <Nav type="footer"/>
        </footer>
    )
}

export default Footer