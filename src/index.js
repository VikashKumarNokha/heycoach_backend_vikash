const express = require("express")
const bodyParsel = require("body-parser");
const cors = require("cors")

 const Restaurants = require("./models/restaurant")

 const {addRestaurant, getRestaurant,
       getRestaurantById, postRestaurant,
       deleteRestaurantById, updateRestaurantById } = require("./controllers/restaurant.controller")

const app = express();

app.use(cors())

app.use(bodyParsel.json());

require('dotenv').config()


app.get("/", (req, res)=>{
       res.send("Hello server");
})


app.get("/add", addRestaurant );

app.get("/get", getRestaurant);
app.get("/get/:id", getRestaurantById )
app.post("/post", postRestaurant);
app.delete("/delete/:id", deleteRestaurantById );
app.patch("/update/:id", updateRestaurantById )

Restaurants.sync({ force: false });

const port=process.env.PORT || 5000

app.listen( port , ()=>{
      console.log("server running on port 5000")
})
