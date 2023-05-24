import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Badge, Drawer, theme, Progress } from "antd";
import styles from "./cartSummary.module.css";
import CartIcon from "./Icons"
import { addCartItems, clearCart, removeCartItems, selectCarItems } from "../../redux/cartSlice";


function CartSummary() {

    //const { token: { colorTextBase }} = theme/useToken();
    // const toggleCart = () => setIsOpen(!isOpen);
    const [open, setOpen] = useState(false);
    const cartItems = useSelector(selectCarItems);
    const dispatch = useDispatch();
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;
    const totalPrice = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty * item.price, 0)
        : 0;

    const shippingText = `only $${35-totalPrice}.00 to free shipping!`;
    const freeShippingText = "You’ve qualified for FREE shipping";
    let drawerTitle = totalPrice > 35 ? freeShippingText : shippingText;

    return (
        <>
            <nav onClick={() => setOpen(true)}>
                <Badge count={count} color="#29231f">
                  <CartIcon />
                </Badge>
            </nav>
            <Drawer
                title={drawerTitle}
                open={open}
                onClose={() => setOpen(false)}
                progressBar={drawerTitle}
            > 
            <Progress percent={(totalPrice/35)*100} showInfo={false}  strokeColor= { totalPrice > 35 ? "#29231f" : "#EFEDE9"}/>
                {
                    
                    cartItems.length === 0 ? (
                        <div>
                            <p className={styles.cart_text}>
                                Your Cart Is Empty
                            </p>
                        </div>
                
                    ) : (
                        <>
                            <h3 className={styles.title_bag}>Your Bag</h3>
                            {cartItems.map(item => (

                                <Row key={item.id} className={styles.row}>
                                    <Col
                                        lg={{ span: 11 }}
                                    >
                                        <img
                                            alt="item image"
                                            src={item.image}
                                            className={styles.item_image}
                                        />
                                    </Col>
                                    <Col
                                        lg={{ span: 12 }}
                                        className={styles.item_info}
                                    >
                                        <h6 className={styles.item_name}>{(item.name)}</h6>
                                        <h6 className={styles.item_catogory}>{item.category}</h6>
                                        <h6 className={styles.item_price}>${item.price}</h6>
                                        <div className={styles.qty_box}>
                                            <button className={styles.qty_button} onClick={() => {if(item.qty>1){
                                                dispatch(addCartItems({
                                                    id: item.id,
                                                    name: item.name,
                                                    category: item.category,
                                                    image: item.image,
                                                    price: item.price,
                                                    countInStock: item.countInStock,
                                                    qty: item.qty - 1,
                                                }))
                                            }
                                                
                                            }}>-</button>
                                            <span>{item.qty}</span>
                                            <button className={styles.qty_button} onClick={() => {if(item.qty<item.countInStock){
                                                dispatch(addCartItems({
                                                    id: item.id,
                                                    name: item.name,
                                                    category: item.category,
                                                    image: item.image,
                                                    price: item.price,
                                                    countInStock: item.countInStock,
                                                    qty: item.qty + 1,
                                                }))
                                            }
                                                
                                            }}>+</button>
                                        </div>
                                    </Col>
                                    <Col className={styles.btn_delete} onClick={() => dispatch(removeCartItems(item.id))}>x
                                    </Col>
                                </Row>


                            ))}
                            <div className={styles.btn_clearCart} onClick={()=>{dispatch(clearCart())}}>clear all</div>
                            <div className={styles.subtotal}>
                                <h4 className={styles.subtotal_title}>Subtotal</h4>
                                <h4 className={styles.subtotal_price}>${totalPrice}</h4>
                            </div>
                            <h6 className={styles.subtotal_text}>Taxes and shipping calculated at checkout</h6>
                            <button className={styles.btn_check_out}>Check Out</button>
                        </>
                    )
                }
            </Drawer>
        </>
    )
}

export default CartSummary;