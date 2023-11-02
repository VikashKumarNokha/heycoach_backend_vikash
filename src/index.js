const express = require("express")
const bodyParsel = require("body-parser");

 const Restaurants = require("./models/restaurant")

const app = express();

app.use(bodyParsel.json());


app.get("/", (req, res)=>{
       res.send("Hello server");
})


   Restaurants.sync({ force: true });

app.listen(5000, ()=>{
      console.log("server running on port 5000")
})
