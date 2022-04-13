import { Router } from "express";
import tbluserController from "../controllers/tbluser.controller";

const tbluserRoutes = Router();

tbluserRoutes.post("/api/tbluser", tbluserController.add);
tbluserRoutes.get("/api/tbluser", tbluserController.get);

export { tbluserRoutes };
