import { Link } from 'react-router';
import styles from './card.module.css';

function Card ({ item }){
    return(
        <Link to={`shop/item/${item.id}`} className={styles.card}>
            <img className={styles.image} />
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.price}>{item.price} USD</p>
        </Link>
    )
}