import { Router } from "express";

import loginController from "../controllers/login.controller";
import authMiddleware from "../middlewares/auth.middleware";

const loginRoutes = Router();

loginRoutes.post("/api/login", loginController.login);
loginRoutes.get("/api/logout", authMiddleware, loginController.logout);

export { loginRoutes };
