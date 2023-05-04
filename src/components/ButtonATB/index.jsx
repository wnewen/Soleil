import styles from './buttonATB.module.css';
import { Button, notification } from "antd";
import { addCartItems } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from "antd";
import { selectLightMode } from "../../redux/colorSlice";

function ButtonATB({ product, qty }) {
    const lightMode = useSelector(selectLightMode);
    const { 
        token: { colorTextButton },
    } = theme.useToken();
    
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
        <Button 
            type='primary'
            className={styles.botton_box} 
            onClick={addToCart}
            style={{
                boxShadow: 'none',
                border: 'none',
                color: colorTextButton,
            }}
        >
            ADD TO BAG
        </Button>
    );
}

export default ButtonATB;