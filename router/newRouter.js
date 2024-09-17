import express from "express";

export const newRouter = express.Router();

newRouter.get("/", (req, res, next) => {
    res.render("form");
});