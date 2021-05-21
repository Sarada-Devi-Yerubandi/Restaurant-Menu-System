import Axios from "axios";
import classes from "../Meals/MealItem/MealItem.module.css";
const MealItem = (props) => {
    const deleteFood = (id) => {
        Axios.delete(`https://restaurant-menu-system.herokuapp.com/delete/${id}`);
    }
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
           
            <div>
                <button onClick={() => deleteFood(props.meal._id)} className="btn btn-danger float-right"><i className="fa fa-trash"></i></button>
            </div>
        </li>
    );
};
export default MealItem;