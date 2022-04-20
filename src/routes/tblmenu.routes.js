import { Router } from "express";
import tblmenuController from "../controllers/tblmenu.controller";

const tblmenuRoutes = Router();

tblmenuRoutes.get("/api/tblmenu", tblmenuController.get);
tblmenuRoutes.get("/api/tblmenu/:id", tblmenuController.find);
// tblmenuRoutes.post("/:menuId/grup/:grupId", tblmenuController.gruptomenu);

export { tblmenuRoutes };
