
import {useState} from "react"
import Header from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";
import ItemCount from "./ItemCount";
import NavBar from "./NavBar";


const App = () => {
    
    
    
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
        <div className="App">
            <NavBar/>
           <ItemListContainer greeting="Hola!"/>
        </div>
    )
}

export default App;