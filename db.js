const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.join(__dirname, './.env'),
});

const Sequelize = require('sequelize');
//database username   password
const sequelize = new Sequelize('gamedb', process.env.USERNAME, process.env.PASSWORD, {
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

module.exports = sequelize
