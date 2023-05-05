const { once } = require("node:events");
const arrayUsers = require("../../utils/ArrayUsers");

async function updateTeamField(request, response) {

    const { team_id, city } = JSON.parse(await once(request, "data"));

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findUserById = await arrayUsers.find((item) => item.user_id === userId);

    if(findUserById) {

        const findTeamByTeamId = await findUserById.teams.find((item) => item.team_id === team_id);

        if(findTeamByTeamId) {

            const updateTeamCity = city;
            findTeamByTeamId.city = updateTeamCity;

            response.writeHead(200);
            return response.end(JSON.stringify({
                user: findUserById.user_id,
                team: findTeamByTeamId
            }));

        }else {
            response.writeHead(404);
            return response.end(JSON.stringify({ message: "Team Not Foound !" }));
        }

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found" }));
    }

}

module.exports = updateTeamField;