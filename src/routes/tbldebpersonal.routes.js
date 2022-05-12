import { Router } from "express";
import tbldebpersonalController from "../controllers/tbldebpersonal";

const tbldebpersonalRoutes = Router();

tbldebpersonalRoutes.post("/api/tbldebpersonal", tbldebpersonalController.add);
tbldebpersonalRoutes.get("/api/tbldebpersonal", tbldebpersonalController.get);

export { tbldebpersonalRoutes };
