import styles from './titleitem.module.css';
import { Link } from 'react-router-dom';

function TitleItem( { title1,title2,product} ){
    console.log(title1,title2,product);
    return(
        <div className={styles.box}>
         
                <Link className={styles.title} to={`products/category/${product}`}>
                    <p1>{title1}</p1>
                    <p2>{title2}</p2>
                </Link>
          
        </div>
    )
}
export default TitleItem;