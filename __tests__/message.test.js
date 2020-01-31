const request = require("supertest");
const server = require("../src/server");
const messageModel = require("../src/models/Message");

describe("Mensagens", () => {
    //o que será executado antes de todos os testes
    beforeAll(() => console.log("Iniciando o teste!"));

    //o que será executado após todos os testes
    afterAll(async () => {
        await messageModel.deleteMany({}, err =>
            console.log("Removendo collection messages!")
        );
        // Fechando o server
        server.close();
        console.log("Fechando o server e finalizando o teste!");
    });

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
