import { User, Plan } from "../models/db_schemas.js";

async function getPlan(name, id) {
  let plan = await Plan.findOne({
    name: name,
    userId: id,
  });

  return plan;
}

export { getPlan };
