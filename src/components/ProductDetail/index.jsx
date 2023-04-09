import { Row, Col } from "antd";
import styles from "./productDetail.module.css";
import ButtonATB from "../ButtonATB";
import { useState } from "react";


function ProductDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    console.log(product.countInStock);
    console.log(qty);
    function decreaseQuantity() {
        if(qty > 0) setQty(qty - 1);
    }
    function increaseQuantity() {
        if(qty < product.countInStock)
        setQty(qty + 1);
    }
    var price = product.price*qty;
    return (
        <div className={styles.ProductDetail_box}>
            <Row gutter={[48, 32]}>
                <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                >
                    <img
                        alt={product.name}
                        className={styles.image}
                        src={product.image}
                    />
                </Col>
                <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    className={styles.product_detail_right_box}
                >
                    <h3 className={styles.product_name}>{product.name}</h3>
                    <h4 className={styles.product_category}>{product.category}</h4>
                    <h5 className={styles.product_description}>{product.description}</h5>
                    <h5 className={styles.product_price}>{price}$</h5>
                    <div className={styles.number_box}>
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{qty}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>
                    <ButtonATB product={product} qty={qty}/>

                    <div className={styles.line}>
                    </div>
                    <h5 className={styles.description_title}>Description</h5>
                    <h5 className={styles.description_content}>{product.description_long}</h5>

                </Col>
            </Row>


        </div>
    );
}

export default ProductDetail;