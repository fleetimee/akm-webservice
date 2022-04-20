import { Router } from "express";
import mstdebiturController from "../controllers/mstdebitur.controller";

const mstdebiturRoute = Router();

mstdebiturRoute.get("/api/mstdebitur", mstdebiturController.get);
mstdebiturRoute.post("/api/mstdebitur", mstdebiturController.add);
mstdebiturRoute.put("/api/mstdebitur/:id", mstdebiturController.update);
mstdebiturRoute.get("/api/mstdebitur/:id", mstdebiturController.find);
mstdebiturRoute.delete("/api/mstdebitur/:id", mstdebiturController.delete);

export { mstdebiturRoute };
