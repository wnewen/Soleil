import styles from"./tools.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"


function Tools(){
    return(
        <div className={styles.tools_box}>
              <TitleItem
                title1={title[4].id}
                title2={title[4].catergory}
                product="tools"
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
export default Tools;