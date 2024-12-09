export function roleCheck(role) {
    try {
        return (req,res,next) => {
            if (req.user.role === role) {
                return next();
            } else {
                res.sendStatus(403)
            }
        }
    } catch (error) {
        console.log(error)
    }
}