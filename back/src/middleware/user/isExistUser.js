import { User } from "../../db/models/user.js";

export const isExistUser = async (req, res, next) => {
    let user
    if (req.body.email) {
        user = await User.findOne({ email: req.body.email });
    } else {
        user = await User.findById(req.userId);

    }
    if (!user) {
        return res.send(`לא נמצא משתמש`).status(400)
    } else {
        req.user = user
        next()
    }
}
