import express from "express";
import path from "path";

import { indexRouter } from "./router/indexRouter.js";
import { newRouter } from "./router/newRouter.js";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));