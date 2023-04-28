const { once } = require("node:events");
const { hash } = require("bcryptjs");
const { randomUUID } = require("node:crypto");
const arrayUsers = require("../../utils/ArrayUsers");

async function createUser(request, response) {

    const { userName, email, password } =  JSON.parse(await once(request, "data"));

    const findUserByEmail = arrayUsers.find((item) => item.email === email);

    if(!findUserByEmail) {

        const passwordHash = await hash(password, 8);

        let user = {
            user_id: randomUUID(),
            userName: userName,
            email: email,
            password: passwordHash,
            createdAt: new Date().toUTCString(),
            teams: []
        }

        arrayUsers.push(user);

        response.writeHead(200);
        return response.end(JSON.stringify({
            user: {
                user_id: user.user_id,
                userName: user.userName,
                email: user.email,
                createdAt: user.createdAt
            }
        }));

    }else {
        response.writeHead(401);
        return response.end(JSON.stringify({ message: "Email is Already in Use !" }));
    }

    // let dataBody;

    // request.on("data", (chunk) => {
    //     dataBody = JSON.parse(chunk);

    //     response.writeHead(200, {
    //         "Content-Length": Buffer.byteLength(dataBody),
    //         "Content-Type": "application/json",
    //         //"Content-Type": "text/plain",
    //     });
    // });

    // request.on("end", () => {
        
    //     let user = {
    //         user_id: randomUUID(),
    //         ...dataBody
    //     }

    //     arrayUsers.push(user);
    //     return response.end(JSON.stringify(user));

    // });

}

module.exports = createUser;