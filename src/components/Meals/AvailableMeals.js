import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import Axios from "axios";
const AvailableMeals = (props) => {
    const[itemList, setFoodList] = useState([]);
    var isEmptyList = false;
    if(!itemList.length){
        isEmptyList = true;
    }

    useEffect(() => {
        getPosts();
        const interval=setInterval(()=>{
            getPosts()
        },1000)
        return()=>clearInterval(interval)
    }, []);
    const getPosts = () => {
        Axios.get("https://restaurant-menu-system.herokuapp.com/read").then((response)=>{
            setFoodList(response.data);
        })
    }
    const mealsList = itemList.map(meal => <MealItem key={meal._id} meal={meal}/>);
    if(isEmptyList === false){
        return(
            <section className={classes.meals}>
                <Card>
                <ul>
                    {mealsList}
                </ul>
                </Card>
            </section>
        );
    }
    else{
        return(
            <h1 className="text-center mt-4">
                No items here :(
            </h1>
        )
    }
};
export default AvailableMeals;