import { Row, Col } from "antd";
import styles from "./productDetail.module.css";

function ProductDetail({ product }) {
    return(
        <div>
            <Row gutter={[32, 32]}>
                <Col
                    xs={{ span: 24 }}
                    lg={{ span:6 }}
                >
                    <img
                        alt={product.name}
                        className={styles.image}
                        src={product.image}
                    />
                </Col>
            </Row>

        </div>
    );
}

export default ProductDetail;