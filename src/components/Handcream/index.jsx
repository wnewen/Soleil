import styles from"./handcream.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { theme } from "antd";


function Handcream(){
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    return(
        <div 
            className={styles.handc_box}
            style={{
                backgroundColor: colorBgBase,
                color: colorTextBase
            }}
        >
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