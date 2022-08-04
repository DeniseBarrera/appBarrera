import Nav from "./Nav"
import CartWidget from "./CartWidget"


const NavBar = ({contador}) => {
    return (
        <header id="header">
                <h1 className="titulo">Tienda Mía</h1>
                <p>El contador va: {contador}</p>
                <Nav 
                type="header"
                />
                <CartWidget/>
                

        </header>
    )
}

export default NavBar