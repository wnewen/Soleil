import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
    return(
        <div>
            <Banner className="layoutHeader"/>
            <Footer />
        </div>
    ) ;
}

export default Home;