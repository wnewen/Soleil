import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import styles from "./cartSummary.module.css";
import CartIcon from "./Icons"
import { selectCarItems } from "../../redux/cartSlice";


function CartSummary({ size, color }) {

    //const { token: { colorTextBase }} = theme/useToken();
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const cartItems = useSelector(selectCarItems);
    const count = (cartItems.length > 0) ?
                cartItems.reduce((sum, item) => sum + item.qty, 0)
                : 0;

    return (
        <nav onClick={toggleModal} >
            <Badge count={count} color="#29231f">
                <CartIcon size={size} color={color}/>
            </Badge>
        </nav>
    )
}

export default CartSummary;