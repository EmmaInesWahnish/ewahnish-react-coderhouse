import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage.js"

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useLocalStorage("pedido", []);

    const isInCart = (identification) => {
        const dish = cartList.find(element => element.id === identification);
        if (dish !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    const addToCart = (item) => {
        if (!isInCart(item.id)) {
            setCartList([...cartList, item]);
        }
        else {
            cartList.cantidad += item.cantidad;
            alert("Item ya esta en el pedido, se suma la cantidad a la ya existente")
            setCartList([...cartList])
        }
    }

    const removeFromCart = (identification) => {
        const dish = cartList.find(element => element.id === identification);
        if (dish) {
            const index = cartList.indexOf(dish)
            cartList.splice(index, 1);
            alert("El item fue removido del pedido")
            setCartList([...cartList])
        }
    }

    const vaciarCarrito = () => {
        setCartList([]);
    }

    const finalizarCompra = () => {
        alert("Aca se insertara logica para adecuar stock y luego vaciar el carrito; por el momento solo se vacia el carrito sin actualizar stock")
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            setCartList,
            addToCart,
            vaciarCarrito,
            isInCart,
            removeFromCart,
            finalizarCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider