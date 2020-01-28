const request = require("supertest");
const server = require("../src/server");
//o que será executado antes de todos os testes
beforeAll(async () => {
    console.log("Iniciando TDD com jest!");
});

//o que será executado após todos os testes
afterAll(() => {
    //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
    server.close();
    console.log("servidor fechado");
});

describe("Interação do usuário nos endpoints.", () => {
    it("Recebendo uma lista de usuários", async () => {
        const response = await request(server).get("/list");
        expect(response.status).toEqual(200);
    });
    it("Cadastrando um usuário.", async () => {
        const response = await request(server).post({
            name: "Christian Possidonio",
            nickname: "christian_possidonio"
        });
        expect(response.status).toEqual(201);
    });
    it("Verifico se o usuário já é cadastrado na base de dados.", async () => {
        expect(verifiedUser()).toMatch("O usuário já é cadastrado");
    });
});
