import styles from './productList.module.css';
import { Row, Col, Breadcrumb, Skeleton, Spin } from 'antd';
import ProductItem from '../ProductItem';

function ProductList({ products, isLoading }) {
    const category = products[0]?.category?.charAt(0).toUpperCase() + products[0]?.category?.slice(1);

    return (
        <div className={styles.productList_box}>
            <Skeleton loading={isLoading} >
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
            </Skeleton>
            <Row gutter={[32, 32]}>
                {products.map(product => (
                    <Skeleton loading={isLoading} avatar active>
                        <Col
                            key={product.id}
                            sm={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 8 }}
                            xxl={{ span: 8 }}
                        >
                            
                                <ProductItem product={product} />
                            
                            
                        </Col>
                    </Skeleton> 
                ))}
            </Row>
        </div >
    );
}

export default ProductList;