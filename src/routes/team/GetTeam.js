const { once } = require("node:events");
const arrayUsers = require("../../utils/ArrayUsers");

async function getTeam(request, response) {

    const { team_id } = JSON.parse(await once(request, "data"));

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findUserById = await arrayUsers.find((item) => item.user_id === userId);

    if(findUserById) {

        const findByTeamId = await findUserById.teams.find((item) => item.team_id === team_id);

        if(findByTeamId) {

            response.writeHead(200);
            return response.end(JSON.stringify({
                user_id: findUserById.user_id,
                team: {
                    team_id: findByTeamId.team_id,
                    teamName: findByTeamId.teamName,
                    city: findByTeamId.city,
                    country: findByTeamId.country,
                    createdAt: findByTeamId.createdAt
                }
            }));

        }else {
            response.writeHead(404);
            return response.end(JSON.stringify({ message: "Team Not Found !" }));
        }

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found !" }));
    }

}

module.exports = getTeam;