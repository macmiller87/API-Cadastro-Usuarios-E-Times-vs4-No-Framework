const { once } = require("node:events");
const arrayUsers = require("../../utils/ArrayUsers");

async function deleteTeam(request, response) {

    const { team_id } = JSON.parse(await once(request, "data"));

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findByUserId = await arrayUsers.find((item) => item.user_id === userId);

    if(findByUserId) {

        const findByTeamId = await findByUserId.teams.findIndex((item) => item.team_id === team_id);

        if(findByTeamId >= 0) {

            findByUserId.teams.splice(findByTeamId, 1);
            response.writeHead(200);
            return response.end(JSON.stringify({ message: "Team Delete With Success !" }));

        }else {
            response.writeHead(404);
            return response.end(JSON.stringify({ message: "Team Not Found !" }));
        }

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found !" }));
    }

}

module.exports = deleteTeam;