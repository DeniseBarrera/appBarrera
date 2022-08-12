const Nav = (parametros) => {

    console.log(parametros.type)

    if(parametros.type == "header"){
        return (
            <nav>
                <a href="#">Productos</a>
                <a href="#">Quienes somos</a>
                <a href="#">Contacto</a>
            </nav>
        )
    }else{
        return (
            <nav>
            <a href="#">link-footer</a>
            <a href="#">link-footer</a>
            <a href="#">link-footer</a>
            </nav>
        )
    }

}

export default Nav