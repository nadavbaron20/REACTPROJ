import { User } from "../../db/models/user.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in getUser middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
