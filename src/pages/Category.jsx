import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Header from '../components/Header';
import Footer from '../components/Footer';

function Category() {
    return(
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default Category;