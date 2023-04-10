import styles from "./tools.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { Link } from 'react-router-dom';
import { Row, Col } from "antd";


function Tools() {
    return (
        <div className={styles.tools_box}>
            <TitleItem
                title1={title[4].id}
                title2={title[4].catergory}
                product="tools"
            />
            <Row gutter={[32, 32]} className={styles.row}>

                <Col
                    key={1}
                    sm={{ span: 8 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className={styles.col}
                ><Link className={styles.title} to={`products/id/10`}>
                        <img className={styles.news_img1} src="./images/tools_left.svg" alt="Tools Left" />
                    </Link> </Col>


                <Col
                    key={2}
                    sm={{ span: 8 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className={styles.col}
                ><Link className={styles.title} to={`products/id/11`}>
                        <img className={styles.news_img2} src="./images/tools_middle.svg" alt="Tools Middle" />
                    </Link> </Col>


                <Col
                    key={3}
                    sm={{ span: 8 }}
                    lg={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    className={styles.col}
                ><Link className={styles.title} to={`products/id/12`}>
                        <img className={styles.news_img3} src="./images/tools_right.svg" alt="Tools Right" />
                    </Link>  </Col>

            </Row>
        </div>
    );
}
export default Tools;