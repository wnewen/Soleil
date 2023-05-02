import { Helmet } from "react-helmet-async"
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsContent from "../components/NewsContent";
import { theme } from 'antd';


function NewsPage() {
    const {
        token: { colorTextBase, colorBgBase, colorBorder },
    } = theme.useToken();
    return (
        <div>
            <Helmet>
                <title>news</title>
                <style>{`
                    body {
                        background-color: ${colorBgBase};
                        color: ${colorTextBase};
                        border-color: ${colorBorder};
                    }
                `}</style>
            </Helmet>
            <Header />
            <NewsContent />
            <Footer />
        </div>
    );
}

export default NewsPage;