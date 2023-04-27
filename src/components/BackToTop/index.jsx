
import styles from './backtotop.module.css'

function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function BackToTop(){
    return(
        <div className={styles.box}>
            <img className={styles.bttimg} onClick={handleClick} src="./images/icon_soleil.svg"/>
        </div>
    )
}
export default BackToTop;