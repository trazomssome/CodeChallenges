import express from "express";
import { viewStory, edit, deleteStory } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id", viewStory);
storyRouter.get("/:id/edit", edit);
storyRouter.get("/:id/delete", deleteStory);

export default storyRouter;
