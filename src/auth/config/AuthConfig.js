const dotenv = require("dotenv/config");

const JWT = {
    JWT_SECRET_TOKEN: process.env.JWT_SECRET_TOKEN,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
}

module.exports = JWT;