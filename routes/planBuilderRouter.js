import { getPlan } from "../controllers/planBuilder-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("../SWE363-Project/views", {
  autoescape: true,
  express: app,
});

app.get("/", async (req, res) => {
  let id = req.query.userId;
  let name = req.query.name;

  if (id == null || name == null) {
    res.render("planBuilder.njk");
    return;
  }
  let plan = JSON.parse((await getPlan(name, id)).plan);
  let array = [];

  for (var s in plan) array.push(plan[s]);

  res.render("planBuilder.njk", {
    plan: array,
  });
});

export default app;
