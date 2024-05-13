import { User, Plan } from "../models/db_schemas.js";

async function getMyPlans(id) {
  let plans = await Plan.find({ userId: id });
  console.log(plans);
  return JSON.stringify(plans);
}

async function getAllPlans() {
  let plans = await Plan.find();
  let res = [];

  for (let i = 0; i < plans.length; i++) {
    let p = plans[i];

    let userId = p.userId;

    let user = await User.find({ id: userId });

    res.push({
      plan: p.plan,
      userId: p.userId,
      name: p.name,
      CreatedAt: p.createdAt,
      likes: p.likes,
      major: p.major,
      summer: p.summer,
    });
  }

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
    name: decodeURI(name),
    userId: id,
  });

  p.plan = plan;

  await p.save();
  return true;
}

async function upvotePlan(name, id) {
  let p = await Plan.findOne({
    name: decodeURI(name),
    userId: id,
  });

  p.likes += 1;

  p.save();
  return true;
}

async function downvotePlan(name, id) {
  let p = await Plan.findOne({
    name: decodeURI(name),
    userId: id,
  });

  p.likes -= 1;

  p.save();
  return true;
}

export {
  getMyPlans,
  getAllPlans,
  createPlan,
  modifyPlan,
  upvotePlan,
  downvotePlan,
};
