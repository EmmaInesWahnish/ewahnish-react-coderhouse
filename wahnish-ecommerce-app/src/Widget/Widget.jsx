import '../App.css';
import { useCartContext } from "../context/cartContext"

const Widget = () => {
  const { cartList, sumaTotal, totalPortions } = useCartContext();
  let porcionesTotales = totalPortions();
  let importeTotal = sumaTotal();

  const hayItems = (cartList.length > 0) ? true : false;

  return (
    <div className="d-flex m-3 bg-warning">
      <i className="fas fa-shopping-cart cart"></i>
      {hayItems ?
        <>
          <h5 className="m-3">Porciones: {porcionesTotales}</h5>
          <h5 className="m-3">Importe: {importeTotal}$</h5>
        </>
        :
        <></>
      }
    </div>
  );
}

export default Widget;
