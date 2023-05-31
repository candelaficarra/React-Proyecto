import"./Header.css"
import CardWidget from "../CardWidget/CardWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ()=>{
    return(
        <header>
            <Navbar bg="" expand="lg" className='header'>
              <Container>
              <img src="https://ih1.redbubble.net/image.1587628124.8217/st,small,507x507-pad,600x600,f8f8f8.jpg" width="80px"  className='logo'/>
                {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="Secciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mujer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hombre</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
                  </NavDropdown>
                  < CardWidget/>
                  </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    )
}

export default Header
