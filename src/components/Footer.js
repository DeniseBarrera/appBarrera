import React from 'react'
import Nav from './Nav'
import ItemCount from './ItemCount'

const Footer = ({contador,nombre}) => {
  return (
    <footer>
    <p>Footer</p>
   <> <p>El contador va: {contador} </p> </>
   </footer>
  )
}

export default Footer