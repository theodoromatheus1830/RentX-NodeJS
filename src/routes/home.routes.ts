import { Router } from "express";
import { HomeController } from "../modules/difusora/useCases/Home/HomeController";

const homeRoutes = Router();

const homeController = new HomeController();

homeRoutes.get("/", homeController.handle);

export { homeRoutes };
