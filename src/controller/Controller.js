const createUser = require("../routes/user/CreateUser");

async function handler(request, response) {

    if(request.url.startsWith("/createUser") && request.method === "POST") {
        return createUser(request, response);
    }

}

module.exports = handler;