
import { ChakraProvider, Heading } from "@chakra-ui/react";
import {useState} from "react"
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";
import NavBar from "./NavBar";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Routes, Route }  from "react-router-dom";


function App() {
    
    
    
     //const resultado = useState(0)
     //let contador = resultado[0]
     //const setContador = resultado[1]
     //console.log(resultado)
    

    //let contador = 0
    /* const arr = useState(0)
    const [contador, setContador] = arr */

    
    return (
        // <>
        //     <Header contador={contador}/>
        //     <Main uno={true} dos={1} tres={"Denise"}/>
        //     <ItemCount/>
        //     <Footer contador={contador} test={true} nombre="Denise"/>
        // </>
        <ChakraProvider>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a tienda Mía!" />} />
                        <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a tienda Mía!"/>}/>
                        <Route path="/product/:id" element={<temDetailContainer/>} />
                    </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App