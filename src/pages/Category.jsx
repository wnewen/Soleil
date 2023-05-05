import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import { theme } from 'antd';
import products from '../json/products.json'
import { useProducts } from '../react-query';

function Category() {
    const {
        token: { colorTextBase, colorBgBase, colorBorder },
    } = theme.useToken();

    // const { data, isLoading } = useProducts();
    // const products = data || [{id:1},{id:2},{id:3}];
    // console.log(products);

    const { categoryName } = useParams();
    const _products = !categoryName
    ? products
    : products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()        
    );

    const title = !categoryName
        ? "NORDIC NEST Shopping Cart"
        : _products[0]?.category.toLowerCase();
    
    return(
        <div>
            <Helmet>
                {/* <title>{title}</title> */}
                <style>{`
                    body {
                        background-color: ${colorBgBase};
                        color: ${colorTextBase};
                        border-color: ${colorBorder};
                    }
                `}</style>
            </Helmet>
            <Header />
            <ProductList products={_products} />
            {/* isLoading={isLoading} */}
            <Footer />
        </div>
    );
}

export default Category;