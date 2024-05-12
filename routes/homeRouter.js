import {} from "../controllers/home-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("../SWE363-Project/views", {
  autoescape: true,
  express: app,
});

export default app;
