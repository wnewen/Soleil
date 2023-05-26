import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";
import styles from "./userinfo.module.css";
import { UserIcon } from '../Icons';
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import { IoPersonOutline } from "react-icons/io5";

export default function UserInfo(  color, props) {
    const lightMode = useSelector(selectLightMode);
//    const { data: userInfo} = useUserInfo();
//    const navigate = useNavigate();

//    const goToProfile = () => {
//       if(userInfo?.name)
//          navigate("/auth/profile")
//       else
//          navigate("/auth/login?redirect=/auth/profile");
//    };
   return (
    <>
    {lightMode
        ?(
            // <UserIcon className={styles.icon}/>
            <IoPersonOutline className={styles.icon} color={color.color}/>
        ) : (
            // <UserIcon className={styles.icon_darkMode}/>
            <IoPersonOutline className={`${styles.icon} ${styles.icon_darkMode}`}/>
        )
    }
    </>

    //   <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
    //      {userInfo
    //         ? <UserOutlined className={styles.userInfoOutlined} />
    //         : <UserSwitchOutlined className={styles.userInfoOutlined} />
    //      }
    //      <p className={styles.userInfoText}>
    //         {!!userInfo?.name
    //            ? `${userInfo.name}'s`
    //            : `請登入`
    //         }
    //      </p>
    //   </div>

   );
}
