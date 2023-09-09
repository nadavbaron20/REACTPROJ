export const isValidPassword = async (req, res, next) => {
    if (req.user.password !== req.body.password) {
        return res.send(`סיסמא לא נכונה`).status(400)
    } else {
        next()
    }
}