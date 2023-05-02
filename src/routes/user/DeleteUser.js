const arrayUsers = require("../../utils/ArrayUsers");

async function deleteUser(request, response) {

    const url = request.url;
    const urlSplit = url.split("/");
    const userId = urlSplit[2];

    const findUserById = arrayUsers.findIndex((item) => item.user_id === userId);

    if(findUserById >= 0) {
        arrayUsers.splice(findUserById, 1);
        response.writeHead(200);
        return response.end(JSON.stringify({ message: "User Delete With Success !" }));
    }

    response.writeHead(404);
    return response.end(JSON.stringify({ message: "User Not Found !" }));

}

module.exports = deleteUser;