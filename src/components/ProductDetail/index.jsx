import { Row, Col, Breadcrumb, Button, Skeleton } from "antd";
import styles from "./productDetail.module.css";
import ButtonATB from "../ButtonATB";
import { useState } from "react";
import DescriptionBt from "../DescriptionBt/descriptionBt";
import {BsPlus, BsDash} from 'react-icons/bs';
 
function ProductDetail({ product }) {
    console.log(product);
    const toggleExpansion = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
      };
    const [qty, setQty] = useState(product?.countInStock > 0 ? 1 : 0);
    function decreaseQuantity() {
        if (qty > 0) setQty(qty - 1);
    }
    function increaseQuantity() {
        if (qty < product?.countInStock)
            setQty(qty + 1);
    }
    var price = product?.price * qty;
    
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
                        {/* <Skeleton loading={isLoading}> */}
                            <img
                                alt={product?.name}
                                className={styles.image}
                                src={product?.image}
                            />
                        {/* </Skeleton> */}
                    </Col>
                    <Col
                        xs={{ span: 24 }}
                        lg={{ span: 12 }}
                        className={styles.product_detail_right_box}
                    >
                        {/* <Skeleton loading={isLoading}> */}
                            <h3 className={styles.product_name}>{product?.name}</h3>
                            <h4 className={styles.product_category}>{product?.category}</h4>
                            <h5 className={styles.product_description}>{product?.description}</h5>
                            <h5 className={styles.product_price}>{price}$</h5>
                            <div className={styles.qty_box}>
                                <Button type='text' style={{ border: 'none' }} onClick={decreaseQuantity}>-</Button>
                                <span>{qty}</span>
                                <Button type='text' style={{ border: 'none' }} onClick={increaseQuantity}>+</Button>
                            </div>
                            <ButtonATB product={product} qty={qty} />

                            <div className={styles.line}>
                            </div>
                            <div onClick={handleDetailsExpand} className={styles.unfold}>
                                <h5  className={styles.description_title}>DESCRIPTION</h5>
                                {detailsExpanded?<BsDash className={styles.icon}/>:<BsPlus  className={styles.icon}/>}
                                </div>
                                {detailsExpanded && (
                                <h5 className={styles.description_content}>{product?.description_long}</h5>
                            )}
                           
                            <div onClick={handleIncludesExpand} className={styles.unfold}>
                                <h5  className={styles.description_title}>WHAT'S INCLUDED</h5>
                                {includesExpanded?<BsDash  className={styles.icon}/>:<BsPlus  className={styles.icon}/>}
                            </div>
                                {includesExpanded&& (
                                    <h5 className={styles.description_content}>{product?.includes}</h5>
                                )}
  
                           
                        {/* </Skeleton> */}
                        
                    </Col>
                </Row>


            </div>
        </div>
    );
}
    

export default ProductDetail;