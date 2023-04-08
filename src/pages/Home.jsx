import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import News from '../components/News';
import Manicure from '../components/Manicure';
import Handcream from '../components/Handcream';
import Accessories from '../components/Accessories';
import Tools from '../components/Tools';

function Home() {
    return(
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner className="layoutHeader"/>
            <News/>
            <Manicure/>
            <Handcream/>
            <Accessories/>
            <Tools/>
            <Footer />
        </div>
    ) ;
}

export default Home;