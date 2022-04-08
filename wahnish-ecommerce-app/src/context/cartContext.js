import { createContext, useContext } from "react";
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
        setCartList([...cartList, item]);
    }

    const updateQuantity = (item) => {
        const dish = cartList.find(element => element.id === item.id);
        if (dish) {
            const index = cartList.indexOf(dish);
            cartList[index] = item;
            setCartList([...cartList]);
        }
    }

    const removeFromCart = (identification) => {
        const dish = cartList.find(element => element.id === identification);
        if (dish) {
            const index = cartList.indexOf(dish)
            cartList.splice(index, 1);
            setCartList([...cartList])
        }
    }

    const emptyCart = () => {
        setCartList([]);
    }

    const endPurchase = () => {
        setCartList([]);
        localStorage.removeItem("pedido");
    }

    const sumaTotal = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.precio * item.cantidad), 0)
    }

    const totalPortions = () => {
        return cartList.reduce((acum, item) => acum += Number(item.cantidad), 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            setCartList,
            addToCart,
            emptyCart,
            isInCart,
            removeFromCart,
            sumaTotal,
            totalPortions,
            updateQuantity,
            endPurchase
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider