import { UserController } from "../controllers/user.Controllers";

import { Router } from "express";
const usuarioRouter = Router();

usuarioRouter.post("", UserController.store);
usuarioRouter.get("", UserController.index);

export default usuarioRouter;
