import express from "express";
import { handelRefreshToken } from "../controllers/refreshTokenController";

const refreshTokenRouter = express.Router();

refreshTokenRouter.route("/").get(handelRefreshToken);

export default refreshTokenRouter;
