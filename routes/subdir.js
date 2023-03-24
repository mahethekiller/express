import express from "express";
import path from "path";
import { getAllEmployees } from "../controllers/employeesController";

const routerSubdir = express.Router();

routerSubdir.get("/item", getAllEmployees);

export default routerSubdir;
