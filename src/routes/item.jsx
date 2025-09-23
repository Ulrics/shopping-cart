import { useLocation } from 'react-router';
import { NavBar } from '../components/navbar/navbar.jsx';
import PrimaryButton from '../components/button/button.jsx';

function ItemPage( {item} ){

    const location = useLocation();
    console.log(location.state)
    const {title, id, price, description, image} = location.state || {};

    return(
        <>
            <NavBar />
            <div className='item-container'>
                <div className='item'>   
                    <img src={image} className='item-image'/>
                    <div className='item-info-container'>
                        <div className='item-info'>
                            <h3>{title}</h3>
                            <p className='item-price'>{price} USD</p>
                            <p className='item-description'>{description}</p>
                        </div>
                        <PrimaryButton label={"Add to Cart"}/>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ItemPage;