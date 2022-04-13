import { Router } from "express";
import userController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

const userRoutes = Router();
userRoutes.post("/api/user", userController.add);
userRoutes.post("/api/user/address", authMiddleware, userController.addAddress);
userRoutes.get("/api/user", userController.get);
userRoutes.get("/api/user/:id", userController.find);
userRoutes.put("/api/user/", authMiddleware, userController.update);
userRoutes.delete("/api/user/:id", userController.delete);

export { userRoutes };
