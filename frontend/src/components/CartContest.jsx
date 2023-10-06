import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{

    const [cartItems, setcartItems] = useState([]);

    const addItemToCart=(item)=>{

        setcartItems([...cartItems, item]);
    }

    return <CartContext.Provider value={{cartItems, setcartItems, addItemToCart}}>
        {children}
    </CartContext.Provider>
};

const useCartContext= ()=> useContext(CartContext);

export default useCartContext;