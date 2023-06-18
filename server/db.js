const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
process.env.DB_NAME, // Hазвание бд
process.env.DB_USER, // nользователь
process.env.DB_PASSWORD, // ПА²оль
{
dialect: 'postgres',
host: process.env.DB_HOST,
port: process.env.DB_PORT
}
)