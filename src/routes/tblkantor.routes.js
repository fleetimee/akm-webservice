import { Router } from "express";
import tblkantorController from "../controllers/tblkantor.controller";

const tblkantorRoutes = Router();

tblkantorRoutes.get("/api/tblkantor", tblkantorController.get);
tblkantorRoutes.post("/api/tblkantor", tblkantorController.add);
tblkantorRoutes.put("/api/tblkantor/:id", tblkantorController.update);
tblkantorRoutes.get("/api/tblkantor/:id", tblkantorController.find);
tblkantorRoutes.delete("/api/tblkantor/:id", tblkantorController.delete);

export { tblkantorRoutes };
