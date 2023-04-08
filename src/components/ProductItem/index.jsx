import styles from './productItem.module.css';
import ButtonATB from '../ButtonATB';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ProductItem( { product } ) {
    return(
        <div className={styles.product_box}>
            <div >
                <Link to={`/products/id/${product.id}`}><img src={product.image} /></Link>
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
                <ButtonATB />
            </div>
        </div>
        
    );
}

export default ProductItem;