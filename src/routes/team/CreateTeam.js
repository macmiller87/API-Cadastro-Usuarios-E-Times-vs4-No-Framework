const { once } = require("node:events");
const { randomUUID } = require("node:crypto");
const arrayUsers = require("../../utils/ArrayUsers");

async function createTeam(request, response) {

    const { teamName, city, country } = JSON.parse(await once(request, "data"));

    const url = request.url;
    const splitUrl = url.split("/");
    const userId = splitUrl[2];

    const findByUserId = await arrayUsers.find((item) => item.user_id === userId);

    if(findByUserId) {

        const findByTeamName = await findByUserId.teams.find((item) => item.teamName === teamName);

        if(!findByTeamName) {

            let _team = {
                team_id: randomUUID(),
                teamName: teamName,
                city: city,
                country: country,
                createdAt: new Date().toUTCString()
            }
    
            findByUserId.teams.push(_team);
            
            response.writeHead(201);
            return response.end(JSON.stringify({
                user_id: findByUserId.user_id,
                team: _team
            }));

        }else {
            response.writeHead(401);
            return response.end(JSON.stringify({ message: "Team Already Registered !" }));
        }

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Not Found !" }));
    }

}

module.exports = createTeam;