const express = require("express")
const bodyParsel = require("body-parser");

 const Restaurants = require("./models/restaurant")

 const {addRestaurant} = require("./controllers/restaurant.controller")

const app = express();

app.use(bodyParsel.json());


app.get("/", (req, res)=>{
       res.send("Hello server");
})


app.get("/add", addRestaurant );


   Restaurants.sync({ force: true });

app.listen(5000, ()=>{
      console.log("server running on port 5000")
})
