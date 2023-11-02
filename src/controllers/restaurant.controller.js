
const Restaurant = require("../models/restaurant")

const addRestaurant = async (req, res)=>{
    const newData = Restaurant.build({ name: "vikash", image_url : "shhdfhjdj", address : "bhaluahin", email : "v@gmail.com", mobile : "9097736105" });
    console.log(newData instanceof Restaurant); // true
    console.log(newData.name); // "Jane"

    await newData.save();
    console.log('Jane was saved to the database!');
    return res.status(200).json(newData.toJSON())
}


module.exports = {addRestaurant}