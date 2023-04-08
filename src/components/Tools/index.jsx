import styles from"./tools.module.css"

function Tools(){
    return(
        <div className={styles.tools_box}>
            <div className={styles.news_title}>
            <h1 className={styles.news_title1}>01</h1>
            <h1 className={styles.news_title2}>News</h1>
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
export default Tools;