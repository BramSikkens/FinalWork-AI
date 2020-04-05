import express = require("express");
import jwt from "jsonwebtoken";
import passport from "passport";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";
const router = express.Router();
let refreshTokens = {};

router.post("/login", function(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      console.log(user);
      return res.status(400).json({ message: "No User" });
    }
    const token = jwt.sign(
      JSON.stringify({ username: user.username, role: user.role }),
      "your_jwt_secret"
    );
    return res.json({ token, user });
  })(req, res, next);
});

router.post("/register", async function(req, res, next) {
  const { username, email, password } = req.body;
  const newUser = new User();
  newUser.email = email;
  newUser.password = password;
  newUser.username = username;
  newUser.role = "NORMAL";

  try {
    await getConnection().manager.save(newUser);
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
});
export = router;
