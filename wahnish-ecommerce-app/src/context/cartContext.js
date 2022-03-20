import {createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const isInCart = (identification)=>{
        const dish = cartList.find(element => element.id === identification);
        if (dish !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    const addToCart = (item)=>{
        if(!isInCart(item.id)) {
        setCartList([...cartList, item]);
        }
        else {
            alert("Item ya esta en el pedido")
        }
    }

    const removeFromCart = (identification)=>{
        const dish = cartList.find(element => element.id === identification);
        if (dish) {
            const index= cartList.indexOf(dish)
            cartList.splice(index,1);
            alert("El item fue removido del pedido")
        }
    }

    const vaciarCarrito = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            isInCart,
            removeFromCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider