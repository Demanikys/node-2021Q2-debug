const data = require('./.env.js')

const Sequelize = require('sequelize');
//database username   password
const sequelize = new Sequelize('gamedb', data.userName, data.password, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)
