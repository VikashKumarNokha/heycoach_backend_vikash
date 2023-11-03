
const Restaurant = require("../models/restaurant")

const addRestaurant = async (req, res)=>{
    const newData = Restaurant.build({ name: "vikash", image_url : "shhdfhjdj", address : "bhaluahin", email : "v@gmail.com", mobile : "9097736105" });
    console.log(newData instanceof Restaurant); // true
    console.log(newData.name); // "Jane"

    await newData.save();
    console.log('Jane was saved to the database!');
    return res.status(200).json(newData.toJSON())
}

const getRestaurant = async (req, res)=>{
           const data = await Restaurant.findAll({});

         return  res.status(200).json({data});
}

const getRestaurantById = async (req, res)=>{
      const data =  await Restaurant.findOne({where : {id : req.params.id}});
      return  res.status(200).json({data});
}

const postRestaurant = async (req, res)=>{
    const newdata = req.body;
    const data =  await Restaurant.create(newdata);
    return  res.status(200).json({data});
}

const deleteRestaurantById = async (req, res)=>{
    const data =  await Restaurant.destroy({where : {id : req.params.id}});
    return  res.status(200).json({data});
}

const updateRestaurantById = async (req, res)=>{
      let updatedData = req.body;
    const data =  await Restaurant.update( updatedData, {where : {id : req.params.id}});
    return  res.status(200).json({data});
}




module.exports = {addRestaurant, getRestaurant, getRestaurantById, postRestaurant, deleteRestaurantById, updateRestaurantById}