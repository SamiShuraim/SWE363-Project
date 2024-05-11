import {} from "../controllers/profile-controller.js";

import express from "express";
import njk from "nunjucks";

const app = express();

app.set("view engine", "njk");

njk.configure("./SWE363-Project/views", {
  autoescape: true,
  express: app,
});

app.get("/:id", async (req, res) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{
    "id": ${req.params.id},
      "page": "profile"
      }`,
  };
  try {
    let ret = await fetch(`http://localhost:3000/plan`, options);
    if (ret.ok) {
      let plans = await ret.json();
      res.render("profile.njk", {
        plans: plans,
      });
    } else {
      console.log("Error");
    }
  } catch (e) {
    console.log(e);
  }
});

export default app;
