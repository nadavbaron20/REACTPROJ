import { User } from "../../db/models/user.js";

export const updatePassword = async (req, res, next) => {
  let user = await User.findById(req.userId);
  user.password = req.params.password;
  await user.save();
  req.user = user;
  next();
};
