import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import Footer from '../components/Footer';
import products from "../json/products.json";

function Product() {
    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );

    return(
        <div>
            <Helmet><title>product</title></Helmet>
            <Header />
            <ProductDetail 
                product={product}
            />
            <Footer />
        </div>
    ) ;
}

export default Product;