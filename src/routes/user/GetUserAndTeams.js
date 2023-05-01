const arrayUsers = require("../../utils/ArrayUsers");

async function getUsersAndTeams(request, response) {

    response.end(JSON.stringify({
        users: arrayUsers
    }));

}

module.exports = getUsersAndTeams;