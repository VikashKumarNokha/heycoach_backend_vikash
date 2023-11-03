const {Sequelize} = require("sequelize");

 //  jdbc:mysql://sql12.freesqldatabase.com:3306/sql1265877

// const sequelize = new Sequelize('restaurantdb', 'root', 'Vikash@8556', {
//     host: 'localhost',
//     dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

//const sequelize = new Sequelize('mysql:mysql://sql12.freesqldatabase.com:3306/sql12658771')

const sequelize = new Sequelize('sql12658771', 'sql12658771', 'zdT8fkBIMn', {
      host: 'sql12.freesqldatabase.com',
       dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
     });

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize;  