import styles from"./manicure.module.css"
import TitleItem from "../TitleItem"
import title from "../json/title.json"


function Manicure(){
    return(
        <div className={styles.mani_box}>
            <TitleItem
                title1={title[1].id}
                title2={title[1].catergory}
                product="manicure"
            />
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