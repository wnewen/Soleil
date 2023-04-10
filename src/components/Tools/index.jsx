import styles from"./tools.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"
import { Link } from 'react-router-dom';


function Tools(){
    return(
        <div className={styles.tools_box}>
              <TitleItem
                title1={title[4].id}
                title2={title[4].catergory}
                product="tools"
            />
            <div className={styles.content}>
            <Link className={styles.title} to={`products/id/10`}>
            <img className={styles.news_img1} src="./images/tools_left.svg"/>
            </Link>
            <Link className={styles.title} to={`products/id/11`}>
            <img className={styles.news_img2} src="./images//tools_middle.svg"/>
            </Link>
            <Link className={styles.title} to={`products/id/12`}>
            <img className={styles.news_img3} src="./images//tools_right.svg"/>
            </Link>
            
           
           
            </div>
           
            


            
        </div>
    );
}
export default Tools;