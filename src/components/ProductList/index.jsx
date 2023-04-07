import styles from './productList.module.css';
import { Row, Col } from 'antd';
import ProductItem from '../ProductItem';

function ProductList({ products }) {
    return(
        <div className={styles.productList_box}>
        <Row gutter={[32, 32]}>
            {products.map(product => (
                <Col
                    key={product.id}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                >
                    <ProductItem product={product} />
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default ProductList;