import '../App.css';
import { Link } from "react-router-dom";
import ItemDetailContainer from '../Container/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemCount from './ItemCount.jsx'
const ItemCard = ({ item }) => {
  let order = 0;
  return (
    <div className="card m-2 p-0 ">
      <Link to={`detail/${item.id}`}>
        <div className="card-header centrar">
          <ItemDetailContainer identificacion={item.id} />
        </div>
      </Link>
      <div className="card-body centrar">
        <ItemCount item={item} order={order} />
      </div>
      <div className="card-footer centrar m-0 p-0">
        <h3>Pedidos: Todos los dias</h3>
        <h3>de 08:00 a 22:00 horas</h3>
      </div>
    </div>);
}

export default ItemCard;
