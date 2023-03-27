import express from "express";
import { handelLogout } from "../controllers/logoutController";

const logoutTokenRouter = express.Router();

logoutTokenRouter.route("/").get(handelLogout);

export default logoutTokenRouter;
