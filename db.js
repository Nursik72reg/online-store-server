const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'online_store', // Название БД
    'postgres', // Пользователь
    '12345', // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
