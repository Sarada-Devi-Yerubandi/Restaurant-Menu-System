import classes from "./MealItem.module.css";
const MealItem = (props) => {
    return(
        <li className={classes.meal}>
            <div>
                <h3>
                    {props.meal.itemName}
                </h3>
                <div className={classes.description}>
                    {props.meal.itemDesc}
                </div>
                <div className={classes.price}>
                    <span>Rs.</span>{props.meal.itemPrice}
                </div>
            </div>
        </li>
    );
};
export default MealItem;