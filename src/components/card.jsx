import { Trash } from 'lucide-react';

function CartNav (){

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