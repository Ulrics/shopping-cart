import { useState } from 'react';
import { Trash, ShoppingCart, PanelRight, Minus, Plus } from 'lucide-react';
import styles from './cart.module.css';
import PrimaryButton from '../button/button';

export function NavCart ( {openCart, cart} ){
    const [cartColor, setColor] = useState('#000000');
    function hoverColorChange(){
        setColor('#3f3f3f')
    }
    function hoverColorChangeOff(){
        setColor('#000000')
    }

    return(
        <button className={styles.navcart} 
                onClick={openCart}
                onMouseEnter={hoverColorChange}
                onMouseLeave={hoverColorChangeOff} >
            <p  className={styles.quantity}
                style={{ color: cartColor }}>
                    {cart.length > 0 ? cart.length : ""}
            </p>
            <ShoppingCart color={cartColor} size={24} strokeWidth={2}/>
        </button>
    )
}

export function CartPanel( {cart, closeCart, removeItem, increaseItem, decreaseItem} ){
    const [panelCloseColor, setColor] = useState('#000000');
    
    function hoverColorChange(){
        setColor('#777575')
    }
    function hoverColorChangeOff(){
        setColor('#000000')
    }

    function calculateTotal(cart){
        let totalCost = 0;
        for(let i = 0; i < cart.length; i++){
            totalCost+=(cart[i].cost * cart[i].quantity);
        }

        const formattedPrice = totalCost.toFixed(2);
        return formattedPrice;
    }

    return(
        <div className={styles["cart-panel-container"]}>
            <div className={styles["cart-panel"]}>
                <div>
                    <div className={styles["padded-container"]}>
                        <div className={styles.row}>
                            <h4 className={styles.header}>Cart</h4>
                            <button
                                className={styles.navcart}                 
                                onClick={closeCart}
                                onMouseEnter={hoverColorChange}
                                onMouseLeave={hoverColorChangeOff}>
                                    <PanelRight color={panelCloseColor} size={24} strokeWidth={2}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.divider}/>
                </div>
                <div className={styles["items-container"]}>
                    {cart.map(item =>
                        <CartItem 
                            item={item} 
                            key={item.id} 
                            removeItem={removeItem} 
                            increaseItem={increaseItem} 
                            decreaseItem={decreaseItem}/>)}
                </div>
                <div>
                    <div className={styles.divider}/>
                    <div className={styles["padded-container"]}>
                        <div className={styles["gap-container"]}>
                            <div className={styles.row}>
                                <p className={styles.paragraph}>Total Cost</p>
                                <p className={styles.paragraph}>{calculateTotal(cart)} USD</p>
                            </div>
                            <PrimaryButton label={"Checkout"}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


function CartItem( {item, removeItem, increaseItem, decreaseItem} ){

    return(
        <div className={styles['item-container']}>
            <div className={styles['item-pic-info']}>
                <div>
                    <img src={item.image} className={styles['item-image']}/>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles.row}>
                        <p className={`${styles.paragraph} ${styles.nowrap}`}>{item.title}</p>
                        <p className={styles.paragraph}>{item.cost} USD</p>
                    </div>
                    <div className={styles.row}>
                        <QuantityPicker item={item} increase={increaseItem} decrease={decreaseItem}/>
                        <RemoveBtn item={item} removeItem={removeItem}/>
                    </div>
                </div>
            </div>
            <div className={styles.divider} />
        </div>
    )
}

function RemoveBtn( {item, removeItem} ){
    const [color, setColor] = useState('#000000');
    function hoverColorChange(){
        setColor('#3f3f3f');
    }
    function hoverColorChangeOff(){
        setColor('#000000')
    }
    return(
        <button 
            className={styles['remove-btn']}
            onClick={() => removeItem(item.id)}
            onMouseEnter={hoverColorChange}
            onMouseLeave={hoverColorChangeOff}>
                Remove 
                <Trash color={color} size={16} strokeWidth={1.5}/>
        </button>
    )
}

function QuantityPicker( {item, increase, decrease} ){
    return(
        <div className={styles["quantity-picker"]}>
            <button className={styles['quantity-btn']} onClick={() => decrease(item.id)}>
                <Minus color={"#000000"} size={16} strokeWidth={1.5} />
            </button>
            <div className={`${styles.paragraph} ${styles.quantitynum}`}>{item.quantity}</div>
            <button className={styles['quantity-btn']} onClick={() => increase(item.id)}>
                <Plus color={"#000000"} size={16} strokeWidth={1.5} />
            </button>
        </div>
    )
}