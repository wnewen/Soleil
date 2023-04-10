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
         <div className={styles.content}>
            <img className={styles.hand_img} src="./images/img_accessories.svg"/>
            <p className={styles.text}>VACANZA</p>
         </div>
       


        
    </div>
    );
}
export default Accessories;