const request = require("supertest");
const server = require("../src/server");
const userModel = require("../src/models/User");

describe("Interação do usuário nos endpoints.", () => {
    //o que será executado antes de todos os testes
    beforeAll(() => console.log("Iniciando o teste!"));

    //o que será executado após todos os testes
    afterAll(async () => {
        await userModel.deleteOne({}, err =>
            console.log("Removendo collection users!")
        );
        // Fechando o server
        server.close();
        console.log("Fechando o server e finalizando o teste!");
    });

    it("Recebendo uma lista de usuários", async () => {
        const response = await request(server).get("/user/list");
        expect(response.status).toEqual(200);
    });

    it("Cadastrando um usuário.", async () => {
        const response = await request(server)
            .post("/user/create")
            .send({
                name: "TDD",
                nickname: "test_tdd"
            });
        expect(response.status).toEqual(201);
    });

    it("Removendo usuário", async () => {
        const response = await request(server).delete("/user/remove/test_tdd");
        expect(response.status).toEqual(200);
    });
});
