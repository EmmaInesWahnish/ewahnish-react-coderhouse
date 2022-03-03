import { useState } from "react";
import '../App.css';

const ItemCount = ({item}) => {
    let order = 0;
    let initialPrice = Number(order) * Number(item.precio);
    const [quantity, setCount] = useState(Number(order));
    const [thePortions, setPortion] = useState(Number(item.porciones));
    const [partialPrice, setPrice] = useState(Number(initialPrice));
    let c = quantity;
    let d = thePortions;
    let p = partialPrice;
    
    const increment = () => {
        if (d > 0) {
            setCount((c) => c + 1);
            setPortion((d) => d - 1);
            setPrice(() => p + Number(item.precio));
        } else {
            alert("Ya no quedan porciones disponibles")
        }
    };

    const decrement = () => {
        if (c > 0) {
            setCount((c) => c - 1);
            setPortion((d) => d + 1);
            setPrice(() => p - Number(item.precio));
        } else {
            alert("Ya no quedan porciones de este item seleccionadas")
        }
    };

    return (
        <div className="flex-container-text centrar">
            <div className="flex-container-buttons  p-0 m-0" style={{width:200}}>
                <button 
                    onClick={increment}
                    className="btn btn-oval btn-xs btn-light"><em className="fa fa-plus"></em></button>
                <div className="flex-item">{quantity}</div>
                <button 
                    onClick={decrement}
                    className="btn btn-oval btn-xs btn-light"><em className="fa fa-minus"></em></button>
            </div>
            <div className="lessWidth">
                <button style={{width:200}}
                    onClick={() => {
                      alert("Porciones agregadas al pedido")
                    }}
                    className="btn btn-primary"><em>Agregar al pedidp</em>
                </button>
            </div>
            <div className="flex-container-text" style={{width:200}}><h3>Porciones restantes {thePortions}</h3></div>
            <div className="flex-container-text" style={{width:200}}><h3>Importe Acumulado ${partialPrice}</h3></div>
        </div>)
}


export default ItemCount;
