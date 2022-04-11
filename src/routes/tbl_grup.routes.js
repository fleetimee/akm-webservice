import { Router } from "express";
import tbl_grupController from "../controllers/tbl_grup.controller";

const tbl_grupRoutes = Router();

tbl_grupRoutes.get("/v1/api/group/:id", tbl_grupController.find);
tbl_grupRoutes.get("/v1/api/group", tbl_grupController.get);

tbl_grupRoutes.post("/v1/api/group", tbl_grupController.add);

tbl_grupRoutes.put("/v1/api/group/:id", tbl_grupController.update);

tbl_grupRoutes.delete("/v1/api/group/:id", tbl_grupController.delete);

export { tbl_grupRoutes };
