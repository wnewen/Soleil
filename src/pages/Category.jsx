import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from "../json/products.json";
import ProductList from '../components/ProductList';

function Category() {
    const { categoryName } = useParams();
    const _products = !categoryName
    ? products
    : products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
        // x =>
        // {
        //     const category = x?.category?.toUpperCase();
        //     const filterCategory = categoryName?.toUpperCase();
        //     console.log(`Category: ${category}, Filter: ${filterCategory}`);
        //     return category === filterCategory;
        // }
        
    );

    const title = !categoryName
        ? "NORDIC NEST Shopping Cart"
        : _products[0]?.category;
    
    return(
        <div>
            <Helmet><title>{title}</title></Helmet>
            <Header />
            <ProductList products={_products}/>
            <Footer />
        </div>
    );
}

export default Category;