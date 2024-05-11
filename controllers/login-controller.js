import { User } from "../models/db_schemas.js";

async function login(credential, password) {
  let user = await User.findOne(
    {
      email: credential,
      password: password,
    },
    { password: 0 }
  );
  if (user == null)
    user = await User.findOne({ phone: credential, password: password });

  if (user == null) return;

  return JSON.stringify(user);
}

export { login };
