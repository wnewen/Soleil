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
import BackToTop from '../components/BackToTop';
import styles from './home.module.css';
import { theme } from 'antd';


function Home() {
    const {
        token: { colorPrimaryText, colorBgBase },
    } = theme.useToken();
    return (
        <div>
            <Helmet>
                <title>Soleil</title>
                <style>{`
                    body {
                        background-color: ${colorBgBase}
                        color: ${colorPrimaryText}
                    }
                `}</style>
            </Helmet>
            <Banner className="layoutHeader" />
            <div className={styles.container}>
                <News />
                <Manicure />
                <Handcream />
                <Accessories />
                <Tools />
                <div className={styles.BackToTop}>
                    <BackToTop />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;