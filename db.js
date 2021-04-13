//import sequelize package
const Sequelize = require('sequelize');

//create a new instance of sequelize, connecting us to database
// const database = new Sequelize (process.env.NAME, 'postgres', process.env.PASS, {host:'localhost',
// dialect:'postgres'});

// const database = new Sequelize (process.env.DATABASE_URL, {
//     dialect:'postgres'});
//authenticate that the username and password match, then log into the database

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: !process.env.DATABASE_URL.includes('postgres')
      ? {
          ssl: {
            rejectUnauthorized: false,
            require: true,
          },
        }
      : {},
  });

database.authenticate()
.then(()=> console.log('postgres db is connected'))
.catch(err => console.log(err));

module.exports=database;
