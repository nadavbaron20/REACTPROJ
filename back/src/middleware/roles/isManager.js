import { Role } from "../../db/models/role.js";
import { User } from "../../db/models/user.js";
const isManager = async (req, res, next) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    //user.roles = ['63e1fb4ff70ed483ab2fe1ad', '63e1fb4ff70ed483ab2fe1ab', '63e1fb4ff70ed483ab2fe1ac']
    //user.roles = ['63e1fb4ff70ed483ab2fe1ad']

    //~populate
    const roles = await Role.find({ name: { $in: user.roles } });

    for (let role of roles) {
      if (role.name === "manager") {
        return next();
      }
    }
    return res.status(403).json({ message: "Requires Manager Role" });
  } catch (e) {
    return res.status(500).json({ message: "Requires Manager Role", error: e });
  }
  //find the user role => if Manager =>
};

export { isManager };
