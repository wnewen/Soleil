import { Helmet } from "react-helmet-async"
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsContent from "../components/NewsContent";

function NewsPage() {
    return(
        <div>
            <Helmet><title>news</title></Helmet>
            <Header />
            <NewsContent />
            <Footer />
        </div>
    ) ;
}

export default NewsPage;