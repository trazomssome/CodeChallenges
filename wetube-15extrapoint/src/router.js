import express from "express";
import { home, write, read } from "./controller";
import { uploadFile } from "./middlewares";

const rootRouter = express.Router();

rootRouter.route("/").get(home).post(uploadFile.single("text"), write);
rootRouter.get("/read/:id", read);

export default rootRouter;
