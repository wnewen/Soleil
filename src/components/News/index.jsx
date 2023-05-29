import styles from "./news.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { NavLink } from "react-router-dom";
import { theme } from 'antd';
// import { Rellax } from 'rellax';

function News() {
    // var rellax = new Rellax('.rellax');
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    return (
       
           <div 
            className={styles.box}
            style={{
                backgroundColor: colorBgBase,
                color: colorTextBase
            }}
        >
         
            <TitleItem
                title1={title[0].id}
                title2={title[0].catergory}
                product="news"
            />
            <div className={styles.content}>

                <p className={styles.saying}>
                    “The beautiful thing about learning is nobody can take it away from you.”
                    — B.B. King, Musician
                </p>

                {/* <div class="rellax" data-rellax-speed="-3">
                I’m slow and smooth
                </div> */}

                <NavLink 
                    to="/news" 
                    style={{
                        textDecoration: 'none',
                        color: colorTextBase
                    }}
                    className={styles.content}
                >
                    <img className={styles.news_img} src="./images/img_news.svg" />
                    <p className={styles.newstitle}>How to Manifest Your 2023 Goals Using Nail Polish Colors</p>
                    <p className={styles.date}>Apr 11 . 2023</p>
                </NavLink>

                
            </div>

        </div>
     
        
    );
}
export default News;