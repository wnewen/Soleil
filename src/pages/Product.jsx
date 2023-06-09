import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import Footer from '../components/Footer';
// import products from "../json/products.json";
import { theme } from 'antd';
import { useProductById } from '../react-query';

function Product() {
    const {
        token: { colorTextBase, colorBgBase, colorBorder },
    } = theme.useToken();

    const { productId } = useParams();
    const { data, isLoading } = useProductById( productId );
    const product = data || {};
    console.log(product);

    return(
        <div>
            <Helmet>
                <title>product</title>
                <style>{`
                    body {
                        background-color: ${colorBgBase};
                        color: ${colorTextBase};
                        border-color: ${colorBorder};
                    }
                `}</style>
            </Helmet>
            <Header />
            <ProductDetail 
                product={product}
                isLoading={isLoading}
            />
            <Footer />
        </div>
    ) ;
}

export default Product;