import { Router } from "express";
import debiturController from "../controllers/debitur.controller";

const debiturRoute = Router();
debiturRoute.post("/api/debitur", debiturController.add);
debiturRoute.get("/api/debitur", debiturController.get);
debiturRoute.get("/api/debitur/:id", debiturController.find);
debiturRoute.put("/api/debitur/:id", debiturController.update);
debiturRoute.delete("/api/debitur/:id", debiturController.delete);

export { debiturRoute };
