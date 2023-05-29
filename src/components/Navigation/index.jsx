import { Drawer } from "antd";
import styles from "./navigation.module.css"
import { NavLink } from "react-router-dom";
import { motion} from "framer-motion";

function Navigation({ open, onClose }) {
    <div>
        
    </div>
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      };
      const childVariants = {
        hidden: { opacity: 0,y:-60 },
        visible: { opacity: 1,y:0 },
      };      

    const NavaigationContent = () => (
        
             <div className={styles.nav_Box}>
                 <NavLink to="/news"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                news
            </NavLink >
            <NavLink to="/products/category/manicure"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                manicure
            </NavLink>
            <NavLink to="/products/category/handCream"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                hand cream
            </NavLink>
            <NavLink to="/products/category/accessories"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                accessories
            </NavLink>
            <NavLink to="/products/category/tools"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                tools
            </NavLink>
        </div>
       
       
    )
    return (
        <>
            <div className={styles.navBar}>
                <NavaigationContent />
            </div>

            <Drawer
                title="Menu"
                placement="left"
                onClose={onClose}
                open={open}
            >
                <div className={styles.drawer}>
                    <NavaigationContent />
                </div>
            </Drawer>
        </>
    );
}

export default Navigation