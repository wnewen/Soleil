import styles from"./manicure.module.css"

function Manicure(){
    return(
        <div className={styles.mani_box}>
            <div className={styles.title}>
            <h1 className={styles.news_title1}>02</h1>
            <h1 className={styles.news_title2}>Manicure</h1>
            </div>
            <div>
            <img src="./images/img_manicure_lumiere.svg"/>
            <p>Lumière</p>
            <p>A Taiwan pressed-on nail brand100% handmade</p>
            <p>ohora</p>
            <p>A Korea nail brandProvided thousands of different nails </p>
                <img src="./images/img_manicure_ohora.svg"/>
            </div>
            
            
            <p>How to Manifest Your 2023 Goals Using Nail Polish Colors</p>
            <p>Apr 11 . 2023</p>


            
        </div>
    );
}
export default Manicure;