require('dotenv').config();


const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 5000,
    dbuser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    dbHost : process.env.DB_HOST,
    dbname : 'lab',
    dbPort : process.env.DB_PORT,
}

module.exports = {config};