import { User, Plan } from "../models/db_schemas.js";

async function getMyPlans(id) {
  let plans = await Plan.find({ id: id });
  return JSON.stringify(plans);
}

async function getAllPlans() {
  let plans = await Plan.find({ public: true });
  return JSON.stringify(plans);
}

async function createPlan(id, plan, major, summer, name) {
  try {
    await Plan.create({
      id: id,
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

export { getMyPlans, getAllPlans, createPlan };
