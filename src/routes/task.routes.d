import { Router } from "express";
import taskController from "../controllers/task.controller.d";

const taskRoutes = Router();

taskRoutes.post("/api/task", taskController.add);
taskRoutes.get("/api/task", taskController.get);

export { taskRoutes };
