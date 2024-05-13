import express from "express";
import njkPkg from "nunjucks";
import cors from "cors";
import bodyParserPkg from "body-parser";

import loginRouter from "./routes/loginRouter.js";
import registerRouter from "./routes/registerRouter.js";
import homeRouter from "./routes/homeRouter.js";
import profileRouter from "./routes/profileRouter.js";
import planRouter from "./routes/planRouter.js";
import planBuilderRouter from "./routes/planBuilderRouter.js";
import { getAllPlans } from "./controllers/plan-controller.js";

const { configure } = njkPkg;
const { json, urlencoded } = bodyParserPkg;

const app = express();

app.set("view engine", "njk");
// Serve static files in the public directory
app.use(express.static("../SWE363-Project/public"));

// Configure Express to use CORS middleware
app.use(cors());

// Configure nunjucks as the template engine
configure("../SWE363-Project/views", {
  autoescape: true,
  express: app,
});

// Accept and parse JSON and url-encoded forms
app.use(json());
app.use(urlencoded({ extended: true }));

// Render the index template for GET '/'
app.get("/", (req, res) => {
  res.render("index.html"); // Todo: Home page
});

app.get("/index", (req, res) => {
  res.render("index.html"); // Todo: Home page
});

app.get("/login", (req, res) => {
  res.render("Login.html");
});

app.get("/contact", (req, res) => {
  res.render("Contact.html");
});

app.get("/service", (req, res) => {
  res.render("service.html");
});

app.get("/about", (req, res) => {
  res.render("about.html");
});

app.get("/community", async (req, res) => {
  let plans = await getAllPlans();
  res.render("community.njk", {
    plans: JSON.parse(plans),
  });
});

app.get("/recover", (req, res) => {
  res.render("recover.html");
});

app.get("/signup", (req, res) => {
  res.render("Signup.njk");
});

// Use the answers router for any request to '/answer'
app.use("/login", loginRouter);

app.use("/register", registerRouter);

app.use("/home", homeRouter);

app.use("/profile", profileRouter);

app.use("/plan", planRouter);

app.use("/planBuilder", planBuilderRouter);

// Use the questions router for requests to '/questions'
// app.use("/questions", questionsRouter);

// Listen on port 3000
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
