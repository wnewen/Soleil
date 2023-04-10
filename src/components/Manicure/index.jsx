import styles from "./manicure.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

function Manicure() {
    return (
        <div className={styles.mani_box}>
            <TitleItem
                title1={title[1].id}
                title2={title[1].catergory}
                product="manicure"
            />
            {/* <div className={styles.content}>
                <div className={styles.lumiere}>
                    <img src="./images/img_manicure_lumiere.svg" />
                <NavLink to="/news">
                <img src="./images/img_manicure_lumiere.svg"/>
                </NavLink>
                    <div className={styles.lumiere_text}>
                        <p className={styles.text1}>Lumière</p>
                        <div className={styles.p1}>
                            <p className={styles.text2}>A Taiwan pressed-on nail brand</p>
                            <p className={styles.text2}>100% handmade</p>
                        </div>

                    </div>

                </div>
                <div className={styles.ohora}>
                    <div className={styles.ohora_text}>
                        <p className={styles.text1}>ohora</p>
                        <div className={styles.p1}>
                            <p className={styles.text2}>A Korea nail brand</p>
                            <p className={styles.text2}>Provided thousands of different nails </p>
                        </div>

                    </div>
                    <img src="./images/img_manicure_ohora.svg" />
                </div>


            </div> */}
            <Row gutter={[32, 32]}>
                <Col span={12} className={styles.left}>
                    <img src="./images/img_manicure_lumiere.svg" className={styles.img} />
                    <div className={styles.ohora_text}>
                        <p className={styles.text1}>ohora</p>
                        <div className={styles.p1}>
                            <p className={styles.text2}>A Korea nail brand</p>
                            <p className={styles.text2}>Provided thousands of different nails </p>
                        </div>
                    </div>
                </Col>

                <Col span={12} className={styles.right}>
                    <div className={styles.lumiere_text}>
                        <p className={styles.text1}>Lumière</p>
                        <div className={styles.p1}>
                            <p className={styles.text2}>A Taiwan pressed-on nail brand</p>
                            <p className={styles.text2}>100% handmade</p>
                        </div>
                    </div>
                    <img src="./images/img_manicure_ohora.svg" className={styles.img} />

                </Col>
            </Row>




        </div>
    );
}
export default Manicure;