import styles from './buttonATB.module.css';
import { Button, notification } from "antd";
import { addCartItems } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function ButtonATB({ product, qty }) {
    const dispatch = useDispatch();
    const openNotification = () => {
        notification.open({
            message: 'Shopping Notification',
            description:
                `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
            placement: 'bottomRight'
        });
    };

    const addToCart = () => {
        openNotification();
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
            countInStock: product.countInStock,
            qty,
        }))
    };

    return(
        <Button className={styles.botton_box} onClick={addToCart}>
            <h4 className={styles.botton_text}>
                ADD TO BAG
            </h4>
        </Button>
    );
}

export default ButtonATB;