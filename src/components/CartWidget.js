import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import  NavBar from './NavBar'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
    <FaShoppingCart/>
    </>
    /*<NavLink to="/cart">
      <GiBalloonDog/>
    </NavLink>*/
  )
}

export default CartWidget