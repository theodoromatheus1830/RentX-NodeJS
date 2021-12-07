import { Router } from "express";
import { ListNewsController } from "../modules/difusora/useCases/listCategories/ListNewsController";

const newsRoutes = Router();

const listNewsController = new ListNewsController();

newsRoutes.get("/", listNewsController.handle);

export { newsRoutes };
