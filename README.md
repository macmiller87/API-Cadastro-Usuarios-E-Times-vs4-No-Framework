### API de Cadastro de Usuários e Times vs4 No Framework

## 🚀 **Tecnologias**

- Nodejs
- JsonWebToken


### 💻 Projeto

- Projeto na versão 4.

- Nesta aplicação foi feita uma API, que é possível cadastrar `usuário com (username, email e password)`, a aplicação gera um `user_id` único randômico para o usúario, também é possível cadastrar `times de futebol com (nome, cidade e pais)`,a aplicação gera um `team_id` único randômico para o time, desde que exista um `usuário` já cadastrado para poder fazer o cadastro dos times, essa verificação é feita pelo `user_id` do usuário, também é possível listar todos usuários criados, e seus respectivos times cadastrados, atualizar e deletar usuários e times etc.
- Após a criação do Usuário, é necessário "Authentica" o mesmo para poder seguir com as outras rotas da aplicação, a autenticação é feita pelo `email` e `password` do usuário cadastrado, gerando assim o `Token`, para esse usuário, o qual é necessário em todas as rotas, exceto a `createUser`, e `/loginUserToken`, obviamente.

## 🚀 Como executar

### Rotas da aplicação `user`

#### CreateUsers: Post - `/createUser`.

- A rota deve receber `username`, `email` e `password` dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:

"user_id": "",
"username": "",
"email": "",
"password"
"created_at": "",

#### LoginUserToken: Post - `/loginUserToken`.

- A rota deve receber `email` e `password` dentro do corpo da requisição, gerando assim o `Token` ao usuário.

#### GetUser: Get - `/getUser`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário a ser consultado , e o `Token` do usuário pelo `auth Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados. 

#### GetUsersAndTeams: Get - `/getUsersAndTeams`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário a ser consultado , e o `Token` do usuário pelo `auth Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

#### UpdateUserField: Get - `/updateUserField`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário a ser atualizado, e pelo corpo da requisição o `userName`, propriedade a ser atualizada no `usuário` , e o `Token` do usuário pelo `auth Bearer`, essa atualização só pode acontecer caso os dois parâmetros `user_id` e `Token` sejam válidados.

#### deleteUser: Delete - `/deleteUser`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário a ser deletado , e o `Token` do usuário pelo `auth Bearer`, essa rota só pode concluir a exclusão com sucesso, caso os dois parâmetros passados anteriormente sejam válidados.

### Rotas da aplicação `team`

#### createTeam: Post = `/createTeam`.

- A rota deve receber `teamName`, `city` e `country` dentro do corpo da requisição, a rota deve receber pelo cabeçario da requisição `http` a propriedade `user_id`, e o `Token` do usuário pelo `auth Bearer`, Ao criar um novo Time, ele deve ser armazenado dentro do array `teams[]` do usuário que está cadastrando esse time, Certifique-se que o ID seja um UUID, cada time deverá estar no seguinte formato:

"team_id": "",
"teamName": "",
"city": "",
"country": "",
"created_at": ""

#### GetTeam: Get = `/getTeam`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário, e pelo corpo da requisição a propriedade `team_id` a ser consultado, e o `Token` do usuário pelo `auth Bearer`, essa consulta só pode acontecer caso os três parâmetros passados anteriormente sejam válidados.

#### UpdateTeamField: Get - `/updateTeamField`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário, e pelo corpo da requisição a propriedade  `city`, a ser atualizada no `team` , e o `Token` do usuário pelo `auth Bearer`, essa atualização só pode acontecer caso os dois parâmetros `user_id` e `Token` sejam válidados.

#### deleteTeam: Delete - `/deleteTeam`.

- A rota deve receber pelo cabeçario de requisição `http` o `user_id` do usuário, e pelo corpo da requisição a propriedade `team_id` a ser deletado, e o `Token` do usuário pelo `auth Bearer`, essa rota só pode concluir a exclusão com sucesso, caso os três parâmetros passados anteriormente sejam válidados.

## Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima"`.
- Com o `Nodejs` e o `Yarn ou Npm` instalados, Na sua IDE preferida, abra o terminal do `git`, e execute o seguinte comando => `yarn ou npm i`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `yarn start:dev`.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia ou Postman ou ainda a extensão ThunderClient no VsCode` e criar as rotas da aplicação citadas acima.
