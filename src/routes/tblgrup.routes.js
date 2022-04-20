import { Router } from "express";
import tblgrupController from "../controllers/tblgrup.controller";

const tblgrupRoutes = Router();

tblgrupRoutes.get("/api/tblgrup", tblgrupController.get);
tblgrupRoutes.post("/api/tblgrup", tblgrupController.add);
tblgrupRoutes.get("/api/tblgrup/:id", tblgrupController.find);
tblgrupRoutes.delete("/api/tblgrup/:id", tblgrupController.delete);
tblgrupRoutes.put("/api/tblgrup/:id", tblgrupController.update);

export { tblgrupRoutes };
