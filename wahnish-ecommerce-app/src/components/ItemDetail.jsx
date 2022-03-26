import '../App.css';
import ItemCount from './ItemCount.jsx'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/cartContext.js';
import { useParams } from "react-router-dom";
const ItemDetail = ({ item }) => {
  let order = 0;

  const { addToCart } = useCartContext();

  const onAdd = (cant, acum) => {
    addToCart({ ...item, cantidad: cant, acumulado: acum });
  }

  const { id } = useParams();
  const isDetail = (id === item.id) ? true : false;
  return (<>
    <Link to={`/detail/${item.id}`}>
      <div className="card-header centrar">
        <h3>{item.descripcion}</h3>
        <h3>p/porcion {item.precio}$</h3>
        <h3>{`${item.categoria} ${item.clase}`}</h3>
        <div className="image-size centrar">
          {item.imagen}
        </div>
      </div>
    </Link>
    <>
      <div className="card-body centrar">
        <ItemCount item={item} order={order} onAdd={onAdd} />
      </div>
    </>
    <>
      {
        !isDetail ?
          <>''</>
          :
          <div className="m-3">
            <h3>Hecho con esmero por chefs profesionales</h3>
            <h3>Estricto control de calidad</h3>
            <h3>Aproximadamente {item.calorias} calorias por porción</h3>
          </div>
      }
    </>
  </>);
}

export default ItemDetail;
