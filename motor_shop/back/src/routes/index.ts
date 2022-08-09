import { Router } from "express";
import anuncioRouter from "./anuncios.routes";
import usuarioRouter from "./users.routes";

const routes = Router();

routes.use("/anuncios", anuncioRouter);
routes.use("/users", usuarioRouter);

export default routes;
