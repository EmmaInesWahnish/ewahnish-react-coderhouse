import '../App.css';
import ItemCount from './ItemCount.jsx'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/cartContext.js';
const ItemDetail = ({ item }) => {
  let order = 0;
  
  const{addToCart, isInCart} = useCartContext();

  let identification = item.id;

  console.log(isInCart(identification))

  const onAdd = (cant, acum) => {
    addToCart({...item, cantidad:cant, acumulado:acum});
  }

  return (<>
    <Link to={`detail/${item.id}`}>
      <div className="card-header centrar">
        <h3>{item.descripcion}</h3>
        <h3>p/porcion {item.precio}$</h3>
        <h3>{`${item.categoria} ${item.clase}`}</h3>
        <div className="image-size centrar">
          {item.imagen}
        </div>
      </div>
    </Link>
    <div className="card-body centrar">
      <ItemCount item={item} order={order} onAdd={onAdd} />
    </div>
  </>);
}

export default ItemDetail;
