import { Router } from "express";
import tbluserController from "../controllers/tbluser.controller";

const tbluserRoutes = Router();

tbluserRoutes.post("/api/tbluser", tbluserController.add);
tbluserRoutes.get("/api/tbluser", tbluserController.get);
tbluserRoutes.get("/api/tbluser/:id", tbluserController.find);
tbluserRoutes.put("/api/tbluser/:id", tbluserController.update);
tbluserRoutes.delete("/api/tbluser/:id", tbluserController.delete);

export { tbluserRoutes };
