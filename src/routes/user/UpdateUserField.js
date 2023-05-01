const { once } = require("node:events");
const arrayUsers = require("../../utils/ArrayUsers");

async function updateUserField(request, response) {

    const { userName } = JSON.parse(await once(request, "data"));

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findUserById = await arrayUsers.find((item) => item.user_id === userId);

    if(findUserById) {

        const updateUserName = userName;
        findUserById.userName = updateUserName;

        response.writeHead(200);
        return response.end(JSON.stringify({
            user: {
                user_id: findUserById.user_id,
                userName: findUserById.userName,
                email: findUserById.email,
                createdAt: findUserById.createdAt
            }
        }));

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found !" }));
    }

}

module.exports = updateUserField;