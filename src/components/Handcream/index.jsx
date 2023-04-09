import styles from"./handcream.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"


function Handcream(){
    return(
        <div className={styles.handc_box}>
              <TitleItem
                title1={title[2].id}
                title2={title[2].catergory}
                product="handcream"
            />
            
            <img className={styles.news_img} src="./images/img_handCream.svg"/>
            <p>Tamburins</p>


            
        </div>
    );
}
export default Handcream;