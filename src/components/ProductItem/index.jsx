import styles from './productItem.module.css';
import ButtonATB from '../ButtonATB';
import { Link } from 'react-router-dom';


function ProductItem({ product }) {
    return (
        <div className={styles.product_box}>
            <Link to={`/products/id/${product.id}`} className={styles.img}><img src={product.image} className={styles.img} /></Link>
            <h3>{product.name}</h3>
            <h4 className={styles.price}>{product.price}$</h4>
            <ButtonATB product={product} qty={1} />
        </div>

    );
}

export default ProductItem;