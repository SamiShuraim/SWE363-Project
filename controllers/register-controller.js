import { User } from "../models/db_schemas.js";

async function register(email, phone, password, id) {
  try {
    if (phone.length != 10 || id.length != 9) return;

    if (!email.includes("@")) return;

    if (password.length < 8) return;

    let user = await User.create({
      email: email,
      password: password,
      phone: phone,
      id: id,
    });

    user = {
      id: user.id,
      _id: user._id,
      email: user.email,
      phone: user.phone,
    };

    return JSON.stringify(user);
  } catch (e) {
    return;
  }
}

export { register };
