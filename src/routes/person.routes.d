import { Router } from "express";
import personController from "../controllers/person.controller.d";

const personRoutes = Router();

personRoutes.get("/api/person", personController.get);
personRoutes.post("/api/person", personController.add);
personRoutes.get("/api/person/:id", personController.find);

export { personRoutes };
