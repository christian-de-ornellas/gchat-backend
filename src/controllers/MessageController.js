const express = require("express");

const messageModel = require("../models/Message");

const router = express.Router();

router.get("/list", async (req, res) => {
    try {
        const messages = await messageModel.find().populate('user')
        return res.status(200).send({ messages });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "Nenhuma informação encontrada" });
    }
});

router.post("/create", async (req, res) => {
    try {
        const {nickname} = req.body
        message = await messageModel.create({ ...req.body, nickname, });
        return res.status(201).send({ message });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "Erro ao enviar a mensagem!" });
    }
});

router.delete("/remove/:messageId/nickname", async (req, res) => {
    try {
        const message = await messageModel.findOne({ _id: messageId });
        if (message.nickname == req.params.nickname) {
            await messageModel.findOneAndDelete(req.params.nickname);
            return res.status(200).send();
        } else {
            return res
                .status(403)
                .send({ message: "Você não pode remover está mensagem!" });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "Erro ao remover a message!" });
    }
});

module.exports = app => app.use("/message", router);
