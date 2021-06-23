import express from "express";
import {
  home,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  profile,
  logout
} from "./userController";

const userRouter = express.Router();

// Add your magic here!
userRouter.get("/", home);
userRouter.route("/join").get(getJoin).post(postJoin);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.get("/logout", logout);
userRouter.route("/profile").get(profile);

export default userRouter;
