import styles from './productList.module.css';
import { Row, Col, Breadcrumb, Skeleton } from 'antd';
import ProductItem from '../ProductItem';
import Category from '../../pages/Category';

function ProductList({ products, isLoading }) {
    console.log(products);
    const category = products[0]?.category?.charAt(0).toUpperCase() + products[0]?.category?.slice(1);
    console.log(category);
    return (
        <div className={styles.productList_box}>
            <Breadcrumb
                className={styles.breadcrumb}
                separator=">"
                items={[
                    {
                        title: 'home',
                        href: '/',
                    },
                    {
                        title: `${category}`,
                    }
                ]}
            />
            <Row gutter={[32, 32]}>
                {products.map(product => (
                    <Col
                        key={product.id}
                        sm={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}
                        xxl={{ span: 8 }}
                    >
                        <Skeleton loading={isLoading}>
                            <ProductItem product={product} />
                        </Skeleton>                        
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ProductList;