import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';

function Home() {
    return(
        <div>
            <Banner className="layoutHeader"/>
        </div>
    ) ;
}

export default Home;