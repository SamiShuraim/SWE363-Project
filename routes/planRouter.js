import {
  createPlan,
  getMyPlans,
  getAllPlans,
} from "../controllers/plan-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("./SWE363-Project/views", {
  autoescape: true,
  express: app,
});

app.post("/", async (req, res) => {
  let page = req.body.page;
  let ret;

  if (page == "profile") {
    let id = req.body.id;
    ret = await getMyPlans(id);
    res.send(ret);
  } else if (page == "community") {
    ret = await getAllPlans();
    res.send(ret);
  } else if (page == "planBuilder") {
    let id = req.body.id;
    let plan = req.body.plan;
    let major = req.body.major;
    let summer = req.body.summer;
    let name = req.body.name;
    ret = await createPlan(id, plan, major, summer, name);
    res.sendStatus(200);
  }
});

export default app;
