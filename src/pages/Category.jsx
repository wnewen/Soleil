import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from "../json/products.json";
import ProductList from '../components/ProductList';

function Category() {
    return(
        <div>
            <Header />
            <ProductList products={products}/>
            <Footer />
        </div>
    );
}

export default Category;