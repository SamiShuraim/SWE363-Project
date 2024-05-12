import { login } from "../controllers/login-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("..SWE363-Project/views", {
  autoescape: true,
  express: app,
});

app.post("/", async (req, res) => {
  let credential = req.body.credential;
  let password = req.body.password;
  let ret = await login(credential, password);

  if (ret != null) res.send(ret);
  else res.sendStatus(403).send();
});

export default app;
