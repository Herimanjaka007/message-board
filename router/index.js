import express from "express";

export const index = express.Router();

index.get("/", (req, res, next) => {
    res.render("index");
});