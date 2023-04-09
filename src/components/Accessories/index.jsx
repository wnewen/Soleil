import styles from"./accessories.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"


function Accessories(){
    return(
        <div className={styles.acce_box}>
          <TitleItem
                title1={title[3].id}
                title2={title[3].catergory}
                product="accessories"
            />
        
        <img className={styles.news_img} src="./images/img_accessories.svg"/>
        <p>Tamburins</p>


        
    </div>
    );
}
export default Accessories;