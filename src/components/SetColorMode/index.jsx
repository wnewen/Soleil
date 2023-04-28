import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";
import styles from './setColorMode.module.css';


function SetColotMode() {
    const { token: { colorTextBase }} = theme.useToken();
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();

    const toggleColor = () => {
        dispatch(setColorMode(!lightMode))
    }
    return (
        <div onClick={toggleColor}>
            {
                lightMode ? (
                    <img src='/images/sun.png' className={styles.icon}></img>
                ) : (
                    <img src='/images/moon.png' className={styles.icon}></img>
                )
            }
        </div>
    );
}

export default SetColotMode;