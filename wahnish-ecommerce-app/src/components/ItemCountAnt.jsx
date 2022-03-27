import { useState } from "react";
import { useCartContext } from '../context/cartContext.js';
import { Link } from "react-router-dom";
import '../App.css';

const ItemCount = ({ item, order, onAdd }) => {
    const { isInCart, removeFromCart } = useCartContext();
    let initialPrice = Number(order) * Number(item.precio);
    let porcionesRestantes = Number(item.porciones) - Number(order)
    const [quantity, setCount] = useState(Number(order));
    const [thePortions, setPortion] = useState(Number(porcionesRestantes));
    const [partialPrice, setPrice] = useState(Number(initialPrice));
    let c = quantity;
    let d = thePortions;
    let procedo = (isInCart(item.id)) ? false : true;

    const increment = () => {
        if (procedo) {
            if (d > 0) {
                setCount((c) => c + 1);
                setPortion((d) => d - 1);
                setPrice(() => partialPrice + Number(item.precio));
            } else {
                alert("Ya no quedan porciones disponibles")
            }
        }
        else {
            alert("El item ya figura en el pedido");
        }
    };

    const decrement = () => {
        if (procedo) {
            if (c > 0) {
                setCount((c) => c - 1);
                setPortion((d) => d + 1);
                setPrice(() => partialPrice - Number(item.precio));
            } else {
                alert("No hay porciones de este item en el pedido")
            }
        } else {
            alert("El item ya figura en el pedido");
        }
    };

    const remover = () => {
        if (!procedo) {
            removeFromCart(item.id)
        }
    }

    return (
        <>
            {
                procedo ?
                    <div className="flex-container-text centrar">
                        <div className="flex-container-buttons  p-0 m-0" style={{ width: 200 }}>
                            <button
                                onClick={increment}
                                className="btn btn-oval btn-xs btn-light"><em className="fa fa-plus"></em></button>
                            <div className="flex-item">{quantity}</div>
                            <button
                                onClick={decrement}
                                className="btn btn-oval btn-xs btn-light"><em className="fa fa-minus"></em></button>
                        </div>
                        <div className="lessWidth">
                            <button style={{ width: 200 }}
                                onClick={() => {
                                    onAdd(quantity, partialPrice)
                                }}
                                className="btn btn-primary"><em>Agregar al pedido</em>
                            </button>
                        </div>
                        <div className="flex-container-text" style={{ width: 200 }}><h3>Porciones restantes {thePortions}</h3></div>
                        <div className="flex-container-text" style={{ width: 200 }}><h3>Importe Acumulado {partialPrice}$</h3></div>
                    </div>
                    :
                    <div className="flex-container-text centrar">
                        <div className="lessWidth">
                            <Link to={`/Cart`}>
                                <button style={{ width: 200 }}
                                    className="btn btn-success"><em>Controlar Pedido</em>
                                </button>
                            </Link>
                        </div>
                        <div className="lessWidth">
                            <button style={{ width: 200 }}
                                onClick={() => {
                                    remover()
                                }}
                                className="btn btn-warning"><em>Remover Item</em>
                            </button>
                        </div>
                        <div className="lessWidth">
                            <Link to={`/`}>
                                <button style={{ width: 200 }}
                                    className="btn btn-info"><em>Continuar Compra</em>
                                </button>
                            </Link>
                        </div>
                        <div className="flex-container-text" style={{ width: 200 }}>
                            <h3>Porciones incorporadas al pedido</h3>
                        </div>
                    </div>
            }
        </>)
}

export default ItemCount;
