const express = require("express");

//Modelo da aplicação
const userModel = require("../models/User");

// Gerencia as rotas.
const router = express.Router();

router.get("/list", async (req, res) => {
    try {
        const user = await userModel.find();
        return res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "Nenhuma informação encontrada" });
    }
});

router.post("/create", async (req, res) => {
    try {
        const { nickname } = req.body;
        if (await userModel.findOne({ nickname })) {
            return res
                .status(400)
                .send({ error: "O usuário já é cadastrado!" });
        }

        const user = await userModel.create({ ...req.body });

        return res.status(201).send({ user });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "Erro ao registrar o usuário!" });
    }
});

module.exports = app => app.use("/user", router);
