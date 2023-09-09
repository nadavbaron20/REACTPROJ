import { Router } from "express";
import { User } from "../db/models/user.js";
import jwt from "jsonwebtoken";
import authConfig from "../db/config/auth.config.js";
import { isExistUser } from "../middleware/user/isExistUser.js";
import { isValidPassword } from "../middleware/user/isValidPassword.js";
import { loginWithToken } from "../middleware/user/loginWithToken.js";
import { validateToken } from "../middleware/user/validateToken.js";
import { getUser } from "../middleware/user/getUser.js";
const router = Router();
router.get("/getSelfUser", validateToken, async (req, res) => {
  let user = await User.findById(req.userId).populate(`business`);
  res.json(user);
});
router.post("/login", isExistUser, isValidPassword, loginWithToken);

router.post("/register", async (req, res) => {
  let newUser = new User(req.body);
  newUser.roles = ["user"];
  await newUser.save();
  const token = jwt.sign({ id: newUser._id }, authConfig.secret, {
    expiresIn: "30d",
  });
  res
    .status(200)
    .json({
      user: newUser,
      token,
    })
    .send("המשתמש נוצר בהצלחה ");
});

export { router as authRouter };
