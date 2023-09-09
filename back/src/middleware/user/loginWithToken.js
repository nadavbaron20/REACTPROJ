import jwt from 'jsonwebtoken'
import authConfig from '../../db/config/auth.config.js';

export const loginWithToken = async (req, res, next) => {
    try {
        const token = jwt.sign({ id: req.user._id }, authConfig.secret, {
            expiresIn: "30d",
        });
        return res.status(200).json({
            user: req.user,
            token,
            msg: `ההתחברות עברה בהצלחה`
        })
    } catch (error) {
        return res.send(`שגיאה בשרת`).status(500);
    }
}