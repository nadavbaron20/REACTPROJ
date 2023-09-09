import { Role } from "../../db/models/role.js";
import { User } from "../../db/models/user.js";
const isAdmin = async (req, res, next) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    const roles = await Role.find({ name: { $in: user.roles } });
    for (let role of roles) {
      if (role === "admin" || "moderator" || "manager") {
        return next();
      }
    }
    return res.status(403).json({ message: "Requires Admin Role" });
  } catch (e) {
    return res.status(500).json({ message: "Requires Admin Role", error: e });
  }
};

export { isAdmin };
