// importamos o Router do express
import { Router } from "express";
// instanciamos o Router
const routes = Router();
// importamos os Controllers
import userListController from "../controllers/user/userList.controller";
import userCreateController from "../controllers/user/userCreate.controller";
// definimos as rotas
routes.post("/users", userCreateController);
routes.get("/users", userListController);
// e exportamos as rotas
export default routes;
