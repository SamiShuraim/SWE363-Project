import { register } from "../controllers/register-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("./SWE363-Project/views", {
  autoescape: true,
  express: app,
});

app.post("/", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let phone = req.body.phone;
  let id = req.body.id;

  let ret = await register(email, phone, password, id);

  if (ret != null) res.send(ret);
  else res.sendStatus(403).send();
});

app.get("/", async (req, res) => {
  res.render("Signup.njk");
});

export default app;
