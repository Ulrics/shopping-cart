import { useState } from 'react';
import { Outlet } from 'react-router';
import { NavBar } from './components/navbar/navbar.jsx';
import { CartPanel } from './components/cart/cart.jsx';

class CartItem {
    constructor(id, cost, title, image){
        this.id = id;
        this.quantity = 1;
        this.cost = cost;
        this.title = title;
        this.image = image;
    }
}

function Root(){
    const [panelIsOpen, setPanel] = useState(false);
    const [cart, setCart] = useState([]);

    function cartIndex(id){
        return cart.findIndex(item => item.id === id);
    }

    function addItem(id, cost, title, image){
        const index = cartIndex(id);

        if(index === -1){
            setCart(prev => [...prev, new CartItem(id, cost, title, image)])
        }
        else{
            increaseQuantity(id);
        }
    }

    function removeItemFromCart(id){
        setCart(prev => prev.filter(item => item.id !== id));
    }

    function increaseQuantity(id){
        const index = cartIndex(id);
        setCart(prev => {
        const newCart = [...prev];
        newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };
        return newCart;
        });
    }

    function decreaseQuantity(id){
        const index = cartIndex(id);
        if (cart[index].quantity > 1){
            setCart(prev => {
            const newCart = [...prev];
            newCart[index] = { ...newCart[index], quantity: newCart[index].quantity - 1 };
            return newCart;
            });
        }
    }

    function handleCartPanel(){
        setPanel(prev => !prev);
    }

    return(
        <>
            <NavBar cartAction={handleCartPanel} cart={cart}/>
            <Outlet context={{ addItem }} />
            {panelIsOpen && <CartPanel 
                                cart={cart} 
                                closeCart={handleCartPanel}
                                removeItem={removeItemFromCart} 
                                increaseItem={increaseQuantity} 
                                decreaseItem={decreaseQuantity}/>}
        </>
    )
}

export default Root;