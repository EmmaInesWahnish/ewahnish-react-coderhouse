import CartWidget from './CartWidget.jsx';
const NavBar=() => {
  return (
    <nav id="barraNavegacion" className="navbar navbar-expand-sm bg-warning asBody">
      <div id="brand">
        <a id="logo" className="navbar-brand-bg bg-warning logo"><i className="fas fa-utensils"></i></a>
      </div>
      <ul id="lista0" className="nav navbar-nav">
        <li id="itemLista00" className="dropdown asBody"><a className="dropdown-toggle asBody" data-toggle="dropdown">Platos Principales</a>
          <ul id="lista1" className="dropdown-menu asBody">
            <li id="itemlista10"><a className="nav-link asBody" id="internationalDishes">Internacionales</a></li>
            <li id="itemlista11"><a className="nav-link asBody" id="dishesForChildren">Infantiles</a></li>
            <li id="itemlista12"><a className="nav-link asBody" id="allDishes">Todos</a></li>
          </ul>
        </li>
        <li id="itemLista01" className="dropdown asBody"><a className="dropdown-toggle asBody" data-toggle="dropdown">Desayunos</a>
          <ul id="lista2" className="dropdown-menu asBody">
            <li id="itemlista20"><a className="nav-link asBody" id="internationalBreakfasts">Continentales</a></li>
            <li id="itemlista21"><a className="nav-link asBody" id="breakfastsForChildren">Americanos</a></li>
            <li id="itemlista22"><a className="nav-link asBody" id="allBreakfasts">Todos</a></li>
          </ul>
        </li>
        <li id="itemLista01" className="dropdown asBody"><a className="dropdown-toggle asBody" data-toggle="dropdown">Postres</a>
          <ul id="lista2" className="dropdown-menu asBody">
            <li id="itemlista20"><a className="nav-link asBody" id="internationalBreakfasts">Europeos</a></li>
            <li id="itemlista21"><a className="nav-link asBody" id="breakfastsForChildren">Americanos</a></li>
            <li id="itemlista22"><a className="nav-link asBody" id="allBreakfasts">Todos</a></li>
          </ul>
        </li>
        <li className="nav-link asBody">
          <a className="nav-link asBody" id="confirmar"><CartWidget /></a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;