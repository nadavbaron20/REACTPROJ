import { Role } from "../../db/models/role.js";
import { User } from "../../db/models/user.js";
const isModerator = async (req, res, next) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    const roles = await Role.find({ name: { $in: user.roles } });

    for (let role of roles) {
      if (role.name === "moderator" || "manager") {
        return next();
      }
    }
    return res.status(403).json({ message: "Requires moderator Role" });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Requires moderator Role", error: e });
  }
};

export { isModerator };
