require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const FoodModel = require('./models/Food');
app.use(express.json());
app.use(cors());


mongoose
  .connect("mongodb+srv://sarada:<password>@crud.uass4.mongodb.net/<databasename>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.post('/insert', async (req, res) => {
  const itemName = req.body.itemName;
  const itemPrice = req.body.itemPrice;
  const itemDesc = req.body.itemDesc;
  const food = new FoodModel({itemName: itemName, itemPrice: itemPrice, itemDesc:itemDesc});

  try{
      await food.save();
      return res.send("inserted");
  }
  catch(err){
      console.log(err);
  }
});
app.get('/read', async (req, res) => {
  FoodModel.find({},(err, result) => {
    if(err){
      res.send(err);
    }
    res.send(result);
  })
});

app.delete("/delete/:id", async(req, res) => {
  const id = req.params.id;
  await FoodModel.findByIdAndRemove(id).exec();
  res.send("deleted");
})


app.listen(process.env.PORT || 3001, () => {
  console.log("App is listening....")
})
