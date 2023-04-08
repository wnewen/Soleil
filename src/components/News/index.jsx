import styles from"./news.module.css"

function News(){
    return(
        <div className={styles.news_box}>
            <div className={styles.title}>
            <h1 className={styles.title1}>01</h1>
            <h1 className={styles.title2}>News</h1>
            </div>
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