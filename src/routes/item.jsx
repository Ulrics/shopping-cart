import { useLocation, useOutletContext } from 'react-router';
import PrimaryButton from '../components/button/button.jsx';

function ItemPage(){
    const { addItem, cart } = useOutletContext();

    const location = useLocation();
    const {title, id, price, description, image} = location.state || {};

    return(
        <div className='item-container'>
            <div className='item'>   
                <img src={image} className='item-image'/>
                <div className='item-info-container'>
                    <div className='item-info'>
                        <h3>{title}</h3>
                        <p className='item-price'>{price} USD</p>
                        <p className='item-description'>{description}</p>
                    </div>
                    <PrimaryButton label={"Add to Cart"} action={()=>addItem(id, price, title, image)}/>
                </div>
            </div>
        </div>  
    )
}

export default ItemPage;