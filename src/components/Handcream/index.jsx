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
            <div className={styles.content}>
            <img className={styles.h_img} src="./images/img_handCream.svg"/>
            <p className={styles.text}>Tamburins</p>
            </div>
       
        </div>
    );
}
export default Handcream;