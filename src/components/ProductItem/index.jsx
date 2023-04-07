import styles from './productItem.module.css';
import ButtonATB from '../ButtonATB';


function ProductItem( { product } ) {
    return(
        <div className={styles.product_box}>
            <div >
                <img src={product.image} />
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
                <ButtonATB />
            </div>
        </div>
    );
}

export default ProductItem;