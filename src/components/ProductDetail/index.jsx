import { Row, Col, Breadcrumb, Button, Skeleton } from "antd";
import styles from "./productDetail.module.css";
import ButtonATB from "../ButtonATB";
import { useState } from "react";
import DescriptionBt from "../DescriptionBt/descriptionBt";
import { BsPlus, BsDash } from 'react-icons/bs';
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";

function ProductDetail({ product, isLoading }) {
    const lightMode = useSelector(selectLightMode);
    const toggleExpansion = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };
    // const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    const [qty, setQty] = useState(1);
    console.log(product.countInStock);
    console.log(qty);
    function decreaseQuantity() {
        if (qty > 0) setQty(qty - 1);
    }
    function increaseQuantity() {
        if (qty < product?.countInStock)
            setQty(qty + 1);
    }
    var price = product.price * qty;

    const [detailsExpanded, setDetailsExpanded] = useState(false);
    const [includesExpanded, setincludesExpanded] = useState(false);

    const handleDetailsExpand = () => {
        setDetailsExpanded(!detailsExpanded);
        setincludesExpanded(false);
    };

    const handleIncludesExpand = () => {
        setincludesExpanded(!includesExpanded);
        setDetailsExpanded(false);
    };

    let color = "#412613";
    color = lightMode ? "#412613" : "#C8D7EB";
    console.log (color);
    return (
        <div>

            <Breadcrumb
                className={styles.breadcrumb}
                separator=">"
                items={[
                    {
                        title: 'home',
                        href: '/',
                    },
                    {
                        title: `${product?.category}`,
                        href: `${window.location.origin}/products/category/${product?.category}`,
                    },
                    {
                        title: `${product?.name}`
                    }
                ]}
            />
            <div className={styles.ProductDetail_box}>
                <Row gutter={[48, 32]} className={styles.row}>
                    <Col
                        xs={{ span: 24 }}
                        lg={{ span: 12 }}
                    >
                        <Skeleton loading={isLoading}>
                            <img
                                alt={product?.name}
                                className={styles.image}
                                src={product?.image}
                            />
                        </Skeleton>
                    </Col>
                    <Col
                        xs={{ span: 24 }}
                        lg={{ span: 12 }}
                        className={styles.product_detail_right_box}
                    >
                        <Skeleton loading={isLoading}>
                            <h3 className={styles.product_name}>{product?.name}</h3>
                            <h4 className={styles.product_category}>{product?.category}</h4>
                            <h5 className={styles.product_description}>{product?.description}</h5>
                            <h5 className={styles.product_price}>{price}$</h5>
                            <div className={styles.qty_box}>
                                <Button type='text' style={{ border: 'none' }} onClick={decreaseQuantity}>
                                    <img className={styles.btn_icon} src={lightMode ? "/images/icon_minus.png" : "/images/dark_mode_icon_minus.png"} />
                                </Button>
                                <span>{qty}</span>
                                <Button type='text' style={{ border: 'none' }} onClick={increaseQuantity}>
                                    <img className={styles.btn_icon} src={lightMode ? "/images/icon_plus.png" : "/images/dark_mode_icon_plus.png"} />
                                </Button>
                            </div>
                            <ButtonATB product={product} qty={qty} />

                            <div className={styles.line}>
                            </div>
                            
                            <div onClick={handleDetailsExpand} className={styles.unfold}>
                                <h5 className={styles.description_title}>DESCRIPTION</h5>
                                {detailsExpanded ? <BsDash className={styles.icon} /> : <BsPlus className={styles.icon} />}
                            </div>
                            {detailsExpanded && (
                                <h5 className={styles.description_content}>{product?.description_long}</h5>
                            )}

                            <div onClick={handleIncludesExpand} className={styles.unfold}>
                                <h5 className={styles.description_title}>WHAT'S INCLUDED</h5>
                                {includesExpanded ? <BsDash className={styles.icon} color={color} /> : <BsPlus className={styles.icon} />}
                            </div>
                            {includesExpanded && (
                                <h5 className={styles.description_content}>{product?.includes}</h5>
                            )}


                        </Skeleton>

                    </Col>
                </Row>


            </div>
        </div>
    );
}


export default ProductDetail;