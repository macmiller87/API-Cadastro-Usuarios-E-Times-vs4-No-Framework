const arrayUsers = require("../../utils/ArrayUsers");

async function getUsersAndTeams(request, response) {

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findUserById = await arrayUsers.find((item) => item.user_id === userId);

    if(findUserById) {
        response.writeHead(200);
        return response.end(JSON.stringify({
            user: findUserById
        }));

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found !" }));
    }
}

module.exports = getUsersAndTeams;