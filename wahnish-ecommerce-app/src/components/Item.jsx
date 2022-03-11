import '../App.css';
import ItemDetailContainer from '../Container/ItemDetailContainer';
import ItemCount from './ItemCount.jsx'
const ItemCard = ({ item }) => {
  let order = 0;
  let identificacion = item.id;
  return (
    <div className="card m-2 p-0 ">
      <div className="card-header centrar">
        <ItemDetailContainer identificacion = {identificacion}/>
      </div>
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
