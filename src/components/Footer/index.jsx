import { NavLink } from "react-router-dom";
import styles from "./footer.module.css"

function Footer() {
    return(
        <div>
            <div className={styles.contact_box}>
                <span>
                    <h4 className={styles.contact_title}>Contact us</h4>
                    <span className={styles.contact_text}>
                        <h6>Monday - Friday 9 am-12 pm / 1 pm-6 pm</h6>
                        <h6>service : limiereofficail@gmail.com</h6>
                        <h6>Line ID : @Lumiere</h6>
                    </span>
                </span>
                <img className={styles.contact_img} src="/images/icon_soleil.svg" />
            </div>

            <div className={styles.footer_box}>
                <h6 className={styles.footer_content}>We are committed to making every girl who loves lifeeasy to become beautiful</h6>
                <div className={styles.icon_box}>
                    <NavLink to="https://instagram.com/lumiere_nails_?igshid=YmMyMTA2M2Y="><img className={styles.icon} src="/images/icon_instagram.svg" /></NavLink>
                    <NavLink to="https://instagram.com/lumiere_nails_?igshid=YmMyMTA2M2Y=" ><img className={styles.icon} src="/images/icon_twitter.svg" /></NavLink>
                    <NavLink to="https://instagram.com/lumiere_nails_?igshid=YmMyMTA2M2Y=" ><img className={styles.icon} src="/images/icon_facebook.svg" /></NavLink>
                </div>
                <h6 className={styles.footer_bottom}>@ 2023 SOLEIL</h6>
            </div>
            
        </div>
    ) ;
}

export default Footer;