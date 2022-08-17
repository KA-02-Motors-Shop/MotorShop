import { Router } from "express";
import announcementRouter from "./announcement.routes";
import usuarioRouter from "./users.routes";

const routes = Router();

routes.use("/announcements", announcementRouter);
routes.use("/users", usuarioRouter);

export default routes;
