const arrayUsers = require("../../utils/ArrayUsers");

async function getUser(request, response) {

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findByUserId = await arrayUsers.find((item) => item.user_id === userId);

    if(!findByUserId) {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found !" }));
    }

    response.writeHead(200);
    return response.end(JSON.stringify({
        user: {
            user_id: findByUserId.user_id,
            userName: findByUserId.userName,
            email: findByUserId.email,
            createdAt: findByUserId.createdAt
        }
    }));

}

module.exports = getUser;