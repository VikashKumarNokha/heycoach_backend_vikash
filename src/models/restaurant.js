const {  DataTypes } = require('sequelize');
const sequelize =  require("./index");

const Restaurants = sequelize.define('RestaurantModel', {
  // Model attributes are defined here
     name : {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    // allowNull defaults to true
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  email : {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'RestaurantsTable'
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = Restaurants;
