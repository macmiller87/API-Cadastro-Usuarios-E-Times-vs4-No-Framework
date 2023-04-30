const dotenv = require("dotenv/config");
const { verify } = require("jsonwebtoken");
const JWT = require("./config/AuthConfig");

function EnsureUserAuthenticate(request, response) {

    try {

        const authToken = request.headers.authorization.replace(/bearer\s/ig, '');
        // const authToken = request.headers.authorization;
        // const [, token] = authToken.split(' ');

        const { sub: user } = verify(authToken, JWT.JWT_SECRET_TOKEN, {
            audience: "users",
            issuer: "userLoginToken"
        });

        return true;

    }catch(error) {
        response.writeHead(401);
        response.end(JSON.stringify(error));
        return false;
    }
}

module.exports = EnsureUserAuthenticate;