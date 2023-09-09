import { Router } from "express";
import { Business } from "../db/models/business.js";
import { User } from "../db/models/user.js";
import { validateToken } from "../middleware/user/validateToken.js";
import { isExistUser } from "../middleware/user/isExistUser.js";
import mongoose from "mongoose";
import { getUser } from "../middleware/user/getUser.js";
import { getBus } from "../middleware/bus/getBus.js";

const router = Router();
router.delete("/deleteBus/:busId", getBus, async (req, res) => {
  req.bus.delete();
  res.json({ msg: `העסק נמחק` });
});
router.post("/createBus", validateToken, isExistUser, async (req, res) => {
  let newBus = new Business(req.body);
  newBus.owner = mongoose.Types.ObjectId(req.userId);
  req.user?.business.push(newBus._id);
  await newBus.save();
  await req.user.save();
  return res.json({ msg: `העסק נפתח בהצלחה`, bus: newBus }).status(200);
});
router.put(
  "/editBus/:busId",
  validateToken,
  getUser,
  getBus,
  async (req, res) => {
    const { __v, _id, owner, createdAt, ...remainBus } = req.body;
    for (let field in remainBus) {
      req.bus[field] = remainBus[field];
    }
    await req.bus.save();
    return res.json({ msg: `העדכון עבר בהצלחה` });
  }
);
router.get("/", async (req, res) => {
  let businses = await Business.find();
  res.json(businses);
});

export { router as busRouter };
