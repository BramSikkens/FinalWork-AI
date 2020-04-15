import passport = require("passport");
import passportLocal = require("passport-local");
import { getRepository } from "typeorm";
import { User } from "../entity/User";

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const LocalStrategy = passportLocal.Strategy;
passport.use(
  new LocalStrategy(function(username, password, done) {
    getRepository(User)
      .findOne({ where: { email: username } })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "No User Found" });
        }

        let check = require("bcrypt").compareSync(password, user.password);
        if (!check) {
          return done(null, false, { message: "Password Incorrect" });
        }

        return done(null, user);
      })
      .catch((err) => done(err));
  })
);

export = passport;
