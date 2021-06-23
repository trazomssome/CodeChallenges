import express from "express";
import { home, movieDetail, getMovie, postMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/add").get(getMovie).post(postMovie);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
