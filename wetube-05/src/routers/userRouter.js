import express from "express";
import {
  profile,
  editProfile,
  detailProfile
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", profile);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id", detailProfile);

export default userRouter;
