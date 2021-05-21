import { Fragment } from "react";
import  mealsImage  from "../../assets/meals-1.jpg";
import  classes  from "./Header.module.css";
import HeaderAdminButton from "./HeaderAdminButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h4>Back Bencher's Meals</h4>
                <HeaderAdminButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="table full of food"/>
            </div>
        </Fragment>
    );
};
export default Header;