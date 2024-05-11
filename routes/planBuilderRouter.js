import {} from "../controllers/planBuilder-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("./SWE363-Project/views", {
  autoescape: true,
  express: app,
});

app.get("/", async (req, res) => {
  res.render("planBuilder.njk");
});

export default app;
