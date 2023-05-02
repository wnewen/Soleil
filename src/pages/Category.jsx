import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from "../json/products.json";
import ProductList from '../components/ProductList';
import { theme } from 'antd';

function Category() {
    const {
        token: { colorTextBase, colorBgBase, colorBorder },
    } = theme.useToken();

    const { categoryName } = useParams();
    const _products = !categoryName
    ? products
    : products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()        
    );

    const title = !categoryName
        ? "NORDIC NEST Shopping Cart"
        : _products[0]?.category;
    
    return(
        <div>
            <Helmet>
                <title>{title}</title>
                <style>{`
                    body {
                        background-color: ${colorBgBase};
                        color: ${colorTextBase};
                        border-color: ${colorBorder};
                    }
                `}</style>
            </Helmet>
            <Header />
            <ProductList products={_products}/>
            <Footer />
        </div>
    );
}

export default Category;