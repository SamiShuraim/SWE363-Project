import {
  createPlan,
  getMyPlans,
  getAllPlans,
  modifyPlan,
  upvotePlan,
  downvotePlan,
} from "../controllers/plan-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("../SWE363-Project/views", {
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

app.post("/modify", async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let plan = req.body.plan;

  if (await modifyPlan(name, id, JSON.stringify(plan))) {
    res.sendStatus(200);
    return;
  }

  res.sendStatus(403);
});

app.post("/upvote", async (req, res) => {
  let id = req.body.userId;
  let name = req.body.name;

  if (await upvotePlan(name, id)) {
    res.sendStatus(200);
    return;
  }

  res.sendStatus(403);
});

app.post("/downvote", async (req, res) => {
  let id = req.body.userId;
  let name = req.body.name;

  if (await downvotePlan(name, id)) {
    res.sendStatus(200);
    return;
  }

  res.sendStatus(403);
});

export default app;
