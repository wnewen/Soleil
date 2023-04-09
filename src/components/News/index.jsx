import styles from"./news.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"

function News(){
    return(
        <div className={styles.news_box}>
            <TitleItem
                title1={title[0].id}
                title2={title[0].catergory}
                product="news"
            />
            <div>
            <p>“The beautiful thing about learning is nobody can take it away from you.”
                — B.B. King, Musician</p>
                
            </div>
            
            <img className={styles.news_img} src="./images/img_news.svg"/>
            <p>How to Manifest Your 2023 Goals Using Nail Polish Colors</p>
            <p>Apr 11 . 2023</p>


            
        </div>
    );
}
export default News;