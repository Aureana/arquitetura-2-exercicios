import express from "express";
import { CousersController } from "../controller/CousersController";


export const coursesRouter = express.Router()

const coursesController = new CousersController()

coursesRouter.get("/", coursesController.getCourses)
coursesRouter.post("/", coursesController.createCourses)
