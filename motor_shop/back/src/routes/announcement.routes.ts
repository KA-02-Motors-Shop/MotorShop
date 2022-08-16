import { AnnouncementController } from "../controllers/announcement.Controllers";

import { Router } from "express";

const announcementRouter = Router();

announcementRouter.post("", AnnouncementController.store);

announcementRouter.get("", AnnouncementController.index);

export default announcementRouter;
