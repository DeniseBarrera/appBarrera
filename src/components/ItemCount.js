import React from 'react'
import {useState , useEffect} from "react"
import { HStack, Button, Text } from '@chakra-ui/react'
import {App} from "./App"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)
    
    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return (

    
    <HStack>
    
        <Button variant='ghost' colorScheme='green' size='sm'onClick={decrease}>-</Button>
        <Text>{count}</Text>
        <Button variant='ghost' colorScheme='green' size='sm' onClick={increase}>+</Button>
        <Button colorScheme='green' size='sm' onClick={onAdd}>Agregar</Button>
    </HStack>
    
    
    )
}

export default ItemCount