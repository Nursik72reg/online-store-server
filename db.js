const {Sequelize} = require('sequelize')

module.exports = new Sequelize('postgres://postgres:12345@localhost:5000/online_store',

    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
/*        port: process.env.DB_PORT*/
    }
)
