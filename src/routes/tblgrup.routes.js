import { Router } from "express";
import tblgrupController from "../controllers/tblgrup.controller";

const tblgrupRoutes = Router();

tblgrupRoutes.get("/api/tblgrup", tblgrupController.get);
tblgrupRoutes.post("/api/tblgrup", tblgrupController.add);

export { tblgrupRoutes };
