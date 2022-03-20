import '../App.css';
import ItemDetailContainer from '../Container/ItemDetailContainer/ItemDetailContainer.jsx';
const ItemCard = ({ item }) => {
  return (
    <>
      <div className="card m-2 p-0 producto">
        <ItemDetailContainer identificacion={item.id} />
        <div className="informacion bg-light">
          <h3>Pedidos: Todos los dias</h3>
          <h3>de 08:00 a 22:00 horas</h3>
        </div>
      </div>
    </>)
}

export default ItemCard;
