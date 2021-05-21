import React, {useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Axios from "axios"
import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItemAdmin from './MealItemsAdmin';

export default function AdminPage() {

    const [itemName, setFoodName] = useState("");
    const [itemPrice, setFoodPrice] = useState(0);
    const [itemDesc, setFoodDesc] = useState("");
    const[itemList, setFoodList] = useState([]);
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
     const addToList = ()  => {
        Axios.post('https://restaurant-menu-system.herokuapp.com/insert', {
            itemName: itemName,
            itemPrice: itemPrice,
            itemDesc: itemDesc
        });
    };    
    const mealsList = itemList.map(meal => <MealItemAdmin key={meal._id} meal={meal}/>);
    
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-3">Welcome Admin!</h1>
            <div className="row">
                <div className="col-sm p-2">
                    <input type="text" className="form-control" id="iName" placeholder="Item Name" onChange={(e) => {setFoodName(e.target.value)}}></input>
                </div>
                <div className="col-sm p-2">
                    <input type="number" className="form-control" id="iPrice" placeholder="Item Price"  onChange={(e) => {setFoodPrice(e.target.value)}}></input>
                </div>
                <div className="col-sm p-2">
                    <input type="text" className="form-control" id="iDesc" placeholder="About Item"  onChange={(e) => {setFoodDesc(e.target.value)}}></input>
                </div>
                <div className="col-sm p-2">
                    <button className="btn btn-primary btn-block mb-2" onClick={addToList}>Add</button>
                    <NavLink className="text-dark " onClick={() => localStorage.clear()} to="/logout">
                        <button className="btn btn-danger btn-block mb-2">Logout</button>
                    </NavLink>
                </div>
            </div>
            <section className={classes.meals}>
                <Card>
                    <ul>
                        {mealsList}
                    </ul>         
                </Card>
            </section>          
        </div>
    )
}