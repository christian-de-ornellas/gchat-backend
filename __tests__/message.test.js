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
    console.log("Servidor fechado");
});

describe("Mensagens", () => {
    it("Recebendo a lista de mensagens.", async () => {
        const response = await request(server).get("/message/list");
        expect(response.status).toEqual(200);
    });

    it("Enviando mensagens. ", async () => {
        const response = await request(server)
            .post("/message/create")
            .send({
                nickname: "test_tdd",
                message: "Oi tudo bem com você?"
            });
        expect(response.status).toEqual(201);
    });
    it("Caso o usuário tente remover uma mensagem inexistente.", async () => {
        const response = await request(server).get(
            "/message/remove/1/test_tdd"
        );

        expect(response.status).toEqual(404);
    });
});
