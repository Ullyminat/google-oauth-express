import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../model/user.mjs';
import { configDotenv } from 'dotenv';

configDotenv();

passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      user = new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        accessToken: accessToken,
        refreshToken: refreshToken,
        picture: profile.photos[0].value,
      });

      await user.save();
    }
    console.log(profile)
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export { passport };