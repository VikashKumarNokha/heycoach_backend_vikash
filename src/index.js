const express = require("express")
const bodyParsel = require("body-parser");


const app = express();

app.use(bodyParsel.json());


app.get("/", (req, res)=>{
       res.send("Hello server");
})


app.listen(5000, ()=>{
      console.log("server running on port 5000")
})
