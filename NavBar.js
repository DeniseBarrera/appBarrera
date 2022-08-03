import Nav from "./Nav"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header id="header">
                <h1 className="titulo">Tienda Mía</h1>
                
                <Nav 
                type="header"
                />
                <CartWidget/>
        </header>
    )
}

export default NavBar