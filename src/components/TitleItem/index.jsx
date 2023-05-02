import styles from './titleitem.module.css';
import { Link } from 'react-router-dom';
import { theme } from 'antd';

function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function TitleItem( { title1,title2,product} ){
    const {
        token: { colorTextBase },
    } = theme.useToken();
    return(
        <div 
            className={styles.box}
            style={{
                color: colorTextBase
            }}
        >
        
        <Link
            style={{
                textDecoration: 'none',
                color: colorTextBase,
            }}
            className={styles.title} 
            to={product === "news" ? "/news" : `/products/category/${product}`} 
            onClick={handleClick}
        >
            <p1>{title1}</p1>
            <p2>{title2}</p2>
        </Link>
       
                
          
        </div>
    )
}
export default TitleItem;