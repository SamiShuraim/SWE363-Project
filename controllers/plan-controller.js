import { User, Plan } from "../models/db_schemas.js";

async function getMyPlans(id) {
  let plans = await Plan.find({ userId: id });
  console.log(plans);
  return JSON.stringify(plans);
}

async function getAllPlans() {
  let plans = await Plan.find();
  return JSON.stringify(plans);
}

async function createPlan(id, plan, major, summer, name) {
  try {
    await Plan.create({
      userId: id,
      major: major,
      plan: JSON.stringify(plan),
      summer: summer,
      likes: 0,
      createdAt: Date.now(),
      name: name,
    });
  } catch (e) {
    console.log("Something went wrong");
  }
}

async function modifyPlan(name, id, plan) {
  let p = await Plan.findOne({
    name: name,
    userId: id,
  });

  p.plan = plan;

  await p.save();
  return true;
}

export { getMyPlans, getAllPlans, createPlan, modifyPlan };
