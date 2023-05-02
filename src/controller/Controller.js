const createUser = require("../routes/user/CreateUser");
const userCreateLoginToken = require("../routes/user/LoginUserToken");
const EnsureUserAuthenticate = require("../auth/EnsureUserAuthenticate");
const getUser = require("../routes/user/GetUser");
const getUsersAndTeams = require("../routes/user/GetUserAndTeams");
const updateUserField = require("../routes/user/UpdateUserField");
const deleteUser = require("../routes/user/DeleteUser");

async function handler(request, response) {

    if(request.url.startsWith("/createUser") && request.method === "POST") {
        return await createUser(request, response);
    }

    if(request.url.startsWith("/loginToken") && request.method === "POST") {
        return await userCreateLoginToken(request, response);
    }

    if(!EnsureUserAuthenticate(request, response)) {

    }else {

        if(request.url.startsWith("/getUser/") && request.method === "GET") {
            return await getUser(request, response);

        }else if(request.url.startsWith("/getUsersAndTeams") && request.method === "GET") {
            return getUsersAndTeams(request, response);

        }else if(request.url.startsWith("/updateUserField/") && request.method === "PATCH") {
            return updateUserField(request, response);

        }else if(request.url.startsWith("/deleteUser/") && request.method === "DELETE") {
            return deleteUser(request, response);
        }

    }
}

module.exports = handler;