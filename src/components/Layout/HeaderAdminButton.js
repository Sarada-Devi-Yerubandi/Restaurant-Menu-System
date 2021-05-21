import AdminIcon from "../Admin/AdminIcon";
import  classes  from "./HeaderAdminButton.module.css";
import { NavLink } from 'react-router-dom'
const HeaderAdminButton = props => {
    return(
        <NavLink to ="/admin"className={classes.button}>
            <span className={classes.icon}>
                <AdminIcon/>
            </span>
            <span>
                Admin
            </span>
        </NavLink>
    );
};
export default HeaderAdminButton;