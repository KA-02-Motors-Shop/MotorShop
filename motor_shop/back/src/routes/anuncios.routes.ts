import { AnuncioController } from "../controllers/anuncio.Controllers";

import { Router } from "express";

const anuncioRouter = Router();

anuncioRouter.post("", AnuncioController.store);
anuncioRouter.get("", AnuncioController.index);

export default anuncioRouter;
