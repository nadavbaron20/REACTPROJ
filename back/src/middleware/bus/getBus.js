import { Business } from "../../db/models/business.js";

export const getBus = async (req, res, next) => {
  const { busId } = req.params;
  let bus = await Business.findById(busId);
  if (!bus) {
    return res.json({ err: `לא נמצא עסק` });
  }
  req.bus = bus;
  next();
};
