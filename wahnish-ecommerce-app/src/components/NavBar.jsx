import CartWidget from './CartWidget.jsx';
const NavBar=() => {
  return (
    <nav id="barraNavegacion" className="navbar navbar-expand-sm bg-warning">
      <div id="brand">
        <a id="logo" className="navbar-brand-bg bg-warning"><i className="fas fa-utensils"></i></a>
      </div>
      <ul id="lista0" className="nav navbar-nav">
        <li id="itemLista00" className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown">Platos Principales</a>
          <ul id="lista1" className="dropdown-menu">
            <li id="itemlista10"><a className="nav-link" id="internationalDishes">Internacionales</a></li>
            <li id="itemlista11"><a className="nav-link" id="dishesForChildren">Infantiles</a></li>
            <li id="itemlista12"><a className="nav-link" id="allDishes">Todos</a></li>
          </ul>
        </li>
        <li id="itemLista01" className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown">Desayunos</a>
          <ul id="lista2" className="dropdown-menu">
            <li id="itemlista20"><a className="nav-link" id="internationalBreakfasts">Internacionales</a></li>
            <li id="itemlista21"><a className="nav-link" id="breakfastsForChildren">Infantiles</a></li>
            <li id="itemlista22"><a className="nav-link" id="allBreakfasts">Todos</a></li>
          </ul>
        </li>
        <li id="itemLista02" className="nav-item bg-warning">
          <a className="nav-link" id="desserts">Postres</a>
        </li>
        <li id="itemLista01" className="nav-item bg-warning">
          <a className="nav-link" id="yourOrder">Control de su pedido <CartWidget /></a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;