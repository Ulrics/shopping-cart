import { Link } from 'react-router';
import styles from './card.module.css';

function Card ({ item }){
const itemLink = item.title
  .replaceAll(/['&./()]/g, "")
  .replaceAll(" - ", "")
  .replaceAll(" ", "-");

    return(
        <Link to={`/shop/${itemLink}`} state={item} className={styles.card}>
            <img className={styles.image} src={item.image}/>
            <div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.price}>{item.price} USD</p>
            </div>
        </Link>
    )
}

export default Card;