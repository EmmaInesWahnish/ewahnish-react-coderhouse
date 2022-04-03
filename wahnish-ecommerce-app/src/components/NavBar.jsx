import Widget from '../Widget/Widget.jsx';
import Logo from '../Widget/Logo.jsx'
import Container from 'react-bootstrap/Container'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const muestro = false;

  return (
    <>
      <Container className="bg-warning">
        <div className="flex-container-nav bg-warning m-auto">
          <Navbar className="bg-warning flex-container-nav px-5 m-0">
            <NavLink to="/" id="logo" className="nav-link pointer bg-warning">
              <Logo />
            </NavLink>
            <NavLink to="categoria/plato"><button className="nav-link pointer btn btn-warning btn-lg button"><strong>Platos</strong></button></NavLink>
            <NavLink to="categoria/postre"><button className="nav-link pointer btn btn-warning btn-lg button"><strong>Postres</strong></button></NavLink>
            <NavLink to="categoria/desayuno"><button className="nav-link pointer btn btn-warning btn-lg button"><strong>Desayunos</strong></button></NavLink>
            <NavLink to="clase/general"><button className="nav-link pointer btn btn-warning btn-lg button"><strong>Generales</strong></button></NavLink>
            <NavLink to="clase/infantil"><button className="nav-link pointer btn btn-warning btn-lg button"><strong>Infantiles</strong></button></NavLink>
            <>
              {
                muestro?
                <NavLink to="/test"><button className="nav-link pointer nav-item btn btn-warning btn-lg button"><strong><i className="fas fa-cog"></i></strong></button></NavLink>
              :
              <></>
              }
            </>
            <NavLink to="cart" className="nav-link pointer asBody bg-warning  cart" id="confirmar">
              <Widget />
            </NavLink>
          </Navbar>
        </div>
      </Container>
    </>
  );
}

export default NavBar;