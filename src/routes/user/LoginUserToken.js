const dotenv = require("dotenv/config");
const { once } = require("node:events");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const JWT = require("../../auth/config/AuthConfig");
const arrayUsers = require("../../utils/ArrayUsers");

async function userCreateLoginToken(request, response) {

    const { email, password } = JSON.parse(await once(request, "data"));

    const isValidUserByEmail = await arrayUsers.find((item) => item.email === email);

    if (isValidUserByEmail) {

        const passwordMatch = await compare(password, isValidUserByEmail.password);

        if (!passwordMatch) {
            response.writeHead(404);
            response.end(JSON.stringify({ message: "Password Incorrect !" }));

        }else {
            
            const accessToken = sign({ isValidUserByEmail, message: "Heyy duude!" }, JWT.JWT_SECRET_TOKEN, {
                subject: isValidUserByEmail.user_id,
                expiresIn: JWT.JWT_EXPIRES_IN,
                audience: "users",
                issuer: "userLoginToken"
            });

            response.writeHead(200);
            return response.end(JSON.stringify({
                user: {
                    user_id: isValidUserByEmail.user_id,
                    userName: isValidUserByEmail.userName,
                    email: isValidUserByEmail.email,
                    createdAt: isValidUserByEmail.createdAt
                },
                accessToken
            }));

        }

    }else {
        response.writeHead(404);
        return response.end(JSON.stringify({ message: "User Email Not Found or Incorrect !" }));
    }
}

module.exports = userCreateLoginToken;