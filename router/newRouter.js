import express from "express";
import { messages } from "./indexRouter.js";

export const newRouter = express.Router();

newRouter.get("/", (req, res, next) => {
    res.render("form");
});

newRouter.post("/", (req, res, next) => {
    const { user, text } = req.body;
    if (user && text) {
        messages.push({ user, text, added: new Date() });
    }
    res.redirect("/");
})