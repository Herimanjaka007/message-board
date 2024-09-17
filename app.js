import express from "express";
import path from "path";

import { index } from "./router/index.js";
const app = express();
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use("/", index);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));