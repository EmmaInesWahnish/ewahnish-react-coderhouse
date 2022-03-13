import Widget from '../Widget/Widget.jsx';
import Logo from '../Widget/Logo.jsx'
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Container className="bg-warning">
        <div className="d-flex justify-content-around align-items-center bg-warning m-auto">
          <NavLink to="/" id="logo" className="pointer navbar-brand-bg bg-warning logo">
            <Logo />
          </NavLink>
          <Navbar className="me-auto navbar navbar-expand-sm bg-warning asBody px-5 m-0">
            <NavLink to="categoria/plato"><button className="btn btn-warning btn-lg button"><strong>Platos</strong></button></NavLink>
            <NavLink to="categoria/postre"><button className="btn btn-warning btn-lg button"><strong>Postres</strong></button></NavLink>
            <NavLink to="categoria/desayuno"><button className="btn btn-warning btn-lg button"><strong>Desayunos</strong></button></NavLink>
            <NavLink to="clase/general"><button className="btn btn-warning btn-lg button"><strong>Generales</strong></button></NavLink>
            <NavLink to="clase/infantil"><button className="btn btn-warning btn-lg button"><strong>Infantiles</strong></button></NavLink>
          </Navbar>
          <NavLink to="cart" className="pointer nav-link asBody  cart" id="confirmar">
            <Widget />
          </NavLink>
        </div>
      </Container>
    </>
  );
}

export default NavBar;