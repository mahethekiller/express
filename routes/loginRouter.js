import express from "express";
import { Login } from "../controllers/loginController";

const loginRouter = express.Router();

loginRouter.route("/").post(Login);
// .post(addEmployee).put(updateEmployee).delete(deleteEmployee);

// loginRouter.route("/:id").get((req, res) => {
//   res.json({
//     a: "helle",
//     b: "hhh",
//   });
// });

export default loginRouter;
