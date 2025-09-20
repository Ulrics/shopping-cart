import { Trash, ShoppingCart } from 'lucide-react';
import styles from './cart.module.css';

export function NavCart (){
    let cartCount = 8;
    //cart.count > 0 ? cartCount = cart.count : cartCount; 

    return(
        <button className={styles.navcart} onClick={"placeholder"}>
            <p className={styles.quantity}>{cartCount}</p>
            <ShoppingCart color={"#000000"} size={24} strokeWidth={2}/>
        </button>
    )
}

function CartPanel(){

}

function CartItem(){

    return(
        <div>
            <div>
                <div>
                    <img />
                </div>
                <div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.cost}</p>
                    </div>
                    <div>
                        <QuantityPicker />
                        <RemoveBtn />
                    </div>
                </div>
            </div>
            <div className="divider" />
        </div>
    )
}

function RemoveBtn(){
    return(
        <button 
            className='' 
            onClick={removeItem}>
                Remove 
                <Trash color={"#000000"} size={16} strokeWidth={1.5}/>
        </button>
    )
}

function QuantityPicker(){
    return(
        <div>
            <button>
                <Minus color={"#000000"} size={16} strokeWidth={1.5} />
            </button>
            <div>{item.quantity}</div>
            <button>
                <Plus color={"#000000"} size={16} strokeWidth={1.5} />
            </button>
        </div>
    )
}