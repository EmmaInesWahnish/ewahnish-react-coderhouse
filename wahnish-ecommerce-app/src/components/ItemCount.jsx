import { useState } from "react";
import '../App.css';

const ItemCount = ({order, portions, portionPrice}) => {
    let initialPrice = order * portionPrice;
    const [quantity, setCount] = useState(Number(order));
    const [thePortions, setPortion] = useState(Number(portions));
    const [partialPrice, setPrice] = useState(Number(initialPrice));
    let c = quantity;
    let d = thePortions;
    
    const increment = () => {
        if (d > 0) {
            setCount((c) => c + 1);
            setPortion((d) => d - 1);
            setPrice((p) => p + portionPrice);
        } else {
            alert("Ya no quedan porciones disponibles")
        }
    };

    const decrement = () => {
        if (c > 0) {
            setCount((c) => c - 1);
            setPortion((d) => d + 1);
            setPrice((p) => p - portionPrice);
        } else {
            alert("Ya no quedan porciones de este item seleccionadas")
        }
    };

    return (
        <div className="flex-container-text">
            <div className="flex-container-buttons  p-0 m-0" style={{width:250}}>
                <button class="p-0 m-0"
                    onClick={increment}
                    className="btn btn-oval btn-xs btn-light"><em className="fa fa-plus"></em></button>
                <div className="flex-item">{quantity}</div>
                <button class="p-0 m-0"
                    onClick={decrement}
                    className="btn btn-oval btn-xs btn-light"><em className="fa fa-minus"></em></button>
            </div>
            <div className="lessWidth">
                <button style={{width:250}}
                    onClick={() => {
                      alert("Porciones agregadas al pedido")
                    }}
                    className="btn btn-primary"><em>Agregar al pedidp</em>
                </button>
            </div>
            <div className="flex-container-text" style={{width:250}}>Porciones restantes {thePortions}</div>
            <div className="flex-container-text" style={{width:250}}>Importe Acumulado {partialPrice}</div>
        </div>)
}


export default ItemCount;
