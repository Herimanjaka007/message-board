import express from "express";

export const indexRouter = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


indexRouter.get("/", (req, res, next) => {
    res.render("index", { messages });
});