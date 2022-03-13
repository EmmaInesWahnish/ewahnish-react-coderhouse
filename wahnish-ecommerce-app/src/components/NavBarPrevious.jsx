import Widget from '../Widget/Widget.jsx';
import Logo from '../Widget/Logo.jsx'
import Container from 'react-bootstrap/Container'
import  Nav from "react-bootstrap/Nav"
import  Navbar from "react-bootstrap/Navbar"
import  NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink , Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center bg-warning py-2">
      <nav id="barraNavegacion" className="navbar navbar-expand-sm bg-warning asBody px-5 m-0">
        <div id="brand">
          <NavLink to="/" id="logo" className="pointer navbar-brand-bg bg-warning logo">
            <Logo/>
          </NavLink>
        </div>
        <ul id="lista0" className="nav navbar-nav">
          <li id="itemLista00" className="dropdown asBody"><a className="dropdown-toggle asBody" data-toggle="dropdown">Platos Principales</a>
            <ul id="lista1" className="dropdown-menu asBody">
              <li id="itemlista10"><a className="pointer nav-link asBody" id="internationalDishes">Internacionales</a></li>
              <li id="itemlista11"><a className="pointer nav-link asBody" id="dishesForChildren">Infantiles</a></li>
              <li id="itemlista12"><a className="pointer nav-link asBody" id="allDishes">Todos</a></li>
            </ul>
          </li>
          <li id="itemLista01" className="dropdown asBody"><a className="dropdown-toggle asBody" data-toggle="dropdown">Desayunos</a>
            <ul id="lista2" className="dropdown-menu asBody">
              <li id="itemlista20"><a className="pointer nav-link asBody" id="internationalBreakfasts">Continentales</a></li>
              <li id="itemlista21"><a className="pointer nav-link asBody" id="breakfastsForChildren">Americanos</a></li>
              <li id="itemlista22"><a className="pointer nav-link asBody" id="allBreakfasts">Todos</a></li>
            </ul>
          </li>
          <li id="itemLista01" className="dropdown asBody"><a className="dropdown-toggle asBody" data-toggle="dropdown">Postres</a>
            <ul id="lista3" className="dropdown-menu asBody">
              <li id="itemlista30"><a className="pointer nav-link asBody" id="internationalDesserts">Europeos</a></li>
              <li id="itemlista31"><a className="pointer nav-link asBody" id="americanDesserts">Americanos</a></li>
              <li id="itemlista32"><a className="pointer nav-link asBody" id="allDesserts">Todos</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <a className="pointer nav-link asBody px-5 cart" id="confirmar"><Widget /></a>
    </div>
    </>
  );
}

export default NavBar;