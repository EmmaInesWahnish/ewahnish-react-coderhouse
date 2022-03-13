import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import  Nav from "react-bootstrap/Nav"
import  Navbar from "react-bootstrap/Navbar"
import  NavDropdown from "react-bootstrap/NavDropdown"
import Widget from '../../Widget/Widget.jsx'
import Logo from '../../Widget/Logo.jsx';



function NavBar() {
    //console.log(props)
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='d-flex justify-content-between align-items-center bg-warning py-2'>
                <NavLink to='/'>Logo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="categoria/remeras">Remeras</NavLink>
                    <NavLink to="categoria/gorras">Gorras</NavLink>
                    
                </Nav>
                <Nav>
                    
                    <NavLink to='cart' className={({ isActive })=> isActive ? 'active' : ''} >
                        <Widget />
                    </NavLink >
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </>
    
  )
}

export default NavBar
