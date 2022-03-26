import '../App.css';
import { useCartContext } from "../context/cartContext"

const Widget = () => {
  const { cartList } = useCartContext();
  let porcionesTotales = 0;
  let importeTotal = 0
  cartList.forEach(calculateTotalPrice);
  function calculateTotalPrice(element) {
    importeTotal = importeTotal + (element.precio * element.cantidad);
    porcionesTotales = porcionesTotales + element.cantidad;
  }

  const hayItems = (cartList.length > 0) ? true : false;

  return (
    <div className="d-flex m-3">
      <i className="fas fa-shopping-cart cart"></i>
     {hayItems ?
       <h5 className="m-3">Porciones: {porcionesTotales} {importeTotal}$</h5>
       :
       <p></p>
       }
    </div>
  );
}

export default Widget;
