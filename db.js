const {Sequelize} = require('sequelize')

module.exports = new Sequelize("postgres://postgres:postgres@localhost/online_store",

    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
