import styles from"./handcream.module.css"

function Handcream(){
    return(
        <div className={styles.handc_box}>
            <div className={styles.title}>
            <h1 className={styles.title1}>03</h1>
            <h1 className={styles.title2}>Handcream</h1>
            </div>
            
            <img className={styles.news_img} src="./images/img_handCream.svg"/>
            <p>Tamburins</p>


            
        </div>
    );
}
export default Handcream;