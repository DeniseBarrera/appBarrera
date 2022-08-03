import Header from "./NavBar";
import Footer from "./ItemListContainer";
const App = () => {
    return (
        <>
            <Header/>
            <main>
                <h2>Inicio</h2>
            </main>
            <Footer test={true} nombre="Denise"/>
        </>
    )
}

export default App;