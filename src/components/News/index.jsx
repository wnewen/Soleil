import styles from "./news.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"

function News() {
    return (
        <div className={styles.box}>
            <TitleItem
                title1={title[0].id}
                title2={title[0].catergory}
                product="news"
            />
            <div className={styles.content}>
                <p className={styles.saying}
                >“The beautiful thing about learning is nobody can take it away from you.”
                    — B.B. King, Musician</p>



                <img className={styles.news_img} src="./images/img_news.svg" />
                <p className={styles.newstitle}>How to Manifest Your 2023 Goals Using Nail Polish Colors</p>

                <p className={styles.date}>Apr 11 . 2023</p>
            </div>


        </div>
    );
}
export default News;