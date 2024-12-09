import { User } from "../model/user.mjs";
import passport from "passport";

export default class AuthController {
    static async googleAuth(req, res, next) {
        passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
    }

    static async googleAuthCallback(req, res, next) {
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/',
        })(req, res, next);
    }

    static async profile(req, res) {
        try {
            res.send(`<img src="${req.user.picture}"/> <p> Name: ${req.user.displayName} </p> `);
        } catch (error) {
            console.log(error)
            res.status(500).json({error})
        }
    }

    static async adminProfile(req, res) {
        try {
            const users = await User.find();
            const result = {
                msg: `ADMIN PANEL`,
                users: users
            };
            res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({error})
        }
    }
}