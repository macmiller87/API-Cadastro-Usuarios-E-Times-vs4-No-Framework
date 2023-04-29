const createUser = require("../routes/user/CreateUser");
const userCreateLoginToken = require("../routes/user/LoginUserToken");

async function handler(request, response) {

    if(request.url.startsWith("/createUser") && request.method === "POST") {
        return createUser(request, response);
    }

    if(request.url.startsWith("/loginToken") && request.method === "POST") {
        return userCreateLoginToken(request, response);
    }
}

module.exports = handler;