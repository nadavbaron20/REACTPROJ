import authConfig from "../../db/config/auth.config.js";
import { User } from "../../db/models/user.js";
import jwt from "jsonwebtoken";
import nodeEvents from "../../nodeEvents/nodeEvents.js";
export const finalLogin = async (req, res, next) => {
  const body = req.body;
  let phone = req.params.phone;
  const verfCode = req.params.verfCode;
  let verfCodeAsNumber = parseInt(verfCode);
  let user = await User.findOne({ phone });
  await user.save();

  if (user.verficationCode === verfCodeAsNumber) {
    const token = jwt.sign({ id: user._id }, authConfig.secret, {
      expiresIn: "30d",
    });
    const authorities = user.roles.map((role) => role); // Use ObjectId values
    user.finishDetails = true;
    res.status(200).json({
      id: user._id,
      phone: `${phone}`,
      roles: authorities,
      accessToken: token,
    });
    return nodeEvents.emit("user");
  } else {
    return res.json({ message: `הקוד ששלחת לא נכון` });
  }
};
