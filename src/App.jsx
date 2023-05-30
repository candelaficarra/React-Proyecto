import './App.css'
import Header from './componentes/header/Header'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'


function App() {

  return (
    <>
      <div>
        < Header />
        < ItemListContainer mensaje="¡Hola! Bienvenidos a mi proyecto"/>
      </div>
    </>
  )
}

export default App
