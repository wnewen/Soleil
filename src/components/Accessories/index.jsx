import styles from"./accessories.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { theme } from "antd";

function Accessories(){
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    return(
        <div 
            className={styles.acce_box}
            style={{
                backgroundColor: colorBgBase,
                color: colorTextBase
            }}
        >
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