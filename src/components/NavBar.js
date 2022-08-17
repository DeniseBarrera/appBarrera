import {HStack, Spacer, Link} from '@chakra-ui/react'
import Nav from "./Nav"
import logo from '../assets/anillos.png'
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <HStack>
            <NavLink to="/">
                <img src={logo} alt="Logo" width="100px" />
            </NavLink>
            <Spacer />
            <HStack>
                <NavLink to="category/Aros">
                    <Link> Aros </Link>
                </NavLink>
                <NavLink to="category/Pulseras">
                    <Link> Pulseras </Link>
                </NavLink>
                <CartWidget/>
            </HStack>
        </HStack>
    )
}

export default NavBar