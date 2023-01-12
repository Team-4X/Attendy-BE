const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');

const verifyCallback = (username, password, done) => {
    Admin.findOne({ username: username })
    .then((admin) => {
        // if there is no admin with that username
        if (!admin) { return done(null, false) }

        const isValid = validPassword(password, admin.hash, admin.salt);

        // is password is validated we return the admin (null is to mean there are no errors)
        // if it's not validated, we return false in the place of admin
        if (isValid) {
            return done(null, admin);
        } else {
            return done(null, false);
        }
    })
    .catch((err) => {
        done(err);
    });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((userId, done) => {
    Admin.findById(userId)
    .then((user) => {
        done(null, user);
    })
    .catch(err => done(err))
});