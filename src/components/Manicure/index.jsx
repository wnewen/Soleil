import styles from "./manicure.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { Row, Col, theme } from "antd";

function Manicure() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    return (
        <div 
            className={styles.mani_box}
            style={{
                backgroundColor: colorBgBase,
                color: colorTextBase
            }}
        >
            <TitleItem
                title1={title[1].id}
                title2={title[1].catergory}
                product="manicure"
            />
            <Row gutter={[32, 32]}>
                <Col span={12} className={styles.left}>
                    <img src="./images/img_manicure_lumiere.svg" className={styles.img1} />
                    <div className={styles.ohora_text}>
                        <p className={styles.text3}>ohora</p>
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
                    <img src="./images/img_manicure_ohora.svg" className={styles.img2} />

                </Col>
            </Row>




        </div>
    );
}
export default Manicure;