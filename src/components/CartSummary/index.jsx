import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Badge, Drawer, theme, Progress } from "antd";
import styles from "./cartSummary.module.css";
import CartIcon from "../Icons"
import { addCartItems, clearCart, removeCartItems, selectCarItems } from "../../redux/cartSlice";
import { selectLightMode } from "../../redux/colorSlice";
import { BsHandbag } from "react-icons/bs";

function CartSummary( color ) {

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

    //icon color in lightMode or darkMode 
    const lightMode = useSelector(selectLightMode);
    return (
        <>
            <nav onClick={() => setOpen(true)}>
            {/* {
                lightMode ? (
                    <BsSun className={styles.icon} color={color.color}/>
                    // <SunIcon className={styles.icon} color={colorTextBase}/>

                ) : (
                    <BsMoonStars className={styles.icon} color={color.color}/>
                    // <MoonIcon className={styles.icon_darkmode} color={colorTextBase}/>

                )
            } */}
                {lightMode
                    ?(
                        <Badge count={count} color="#29231f">
                            <BsHandbag className={styles.icon}  color={color.color}/>
                        </Badge>
                    ) : (
                        <Badge count={count} color="#C8D7EB">
                            <BsHandbag className={styles.icon} color={color.color}/>
                        </Badge>
                    )
                }
            </nav>
            <Drawer
                title={drawerTitle}
                open={open}
                onClose={() => setOpen(false)}
                progressBar={drawerTitle}
            > 
            <Progress percent={(totalPrice/35)*100} showInfo={false}  strokeColor= { totalPrice > 35 ? "#29231f" : "#8592A2"}/>
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
                                        xs={{span: 10}}
                                        sm={{span: 10}}
                                        lg={{ span: 10 }}
                                    >
                                        <img
                                            alt="item image"
                                            src={item.image}
                                            className={styles.item_image}
                                        />
                                    </Col>
                                    <Col
                                        xs={{span: 14}}
                                        sm={{span: 14}}
                                        lg={{ span: 14 }}
                                        className={styles.item_info}
                                    >
                                        <div className={styles.item_title_box}>
                                            <h6 className={styles.item_name}>{(item.name)}</h6>
                                            <h6 className={styles.btn_delete} onClick={() => dispatch(removeCartItems(item.id))}>x</h6>
                                        </div>
                                        
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
                                                
                                            }}>
                                                <img className={styles.btn_icon} src={lightMode ? "/images/icon_minus.png" : "/images/dark_mode_icon_minus.png"} />
                                            </button>
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
                                                
                                            }}>
                                                <img className={styles.btn_icon} src={lightMode ? "/images/icon_plus.png" : "/images/dark_mode_icon_plus.png"} />
                                            </button>
                                        </div>
                                    </Col>
                                    {/* <Col className={styles.btn_delete} onClick={() => dispatch(removeCartItems(item.id))}>x
                                    </Col> */}
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