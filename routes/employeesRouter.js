import express from "express";
import path from "path";
import { getAllEmployees, addEmployee, updateEmployee, deleteEmployee, getActiveEmployees, getActiveEmployeesEMP } from "../controllers/employeesController";

const empRouter = express.Router();

empRouter.route("/").get(getAllEmployees).post(addEmployee).put(updateEmployee).delete(deleteEmployee);

empRouter.route("/getActiveEmployees").get(getActiveEmployees);
empRouter.route("/getActiveEmployeesEMP").get(getActiveEmployeesEMP);

empRouter.route("/:id").get((req, res) => {
  res.json({
    a: "helle",
    b: "hhh",
  });
});

export default empRouter;
