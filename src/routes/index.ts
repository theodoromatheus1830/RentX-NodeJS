import { Router } from "express";
import { homeRoutes } from "./home.routes";
import { newsRoutes } from "./news.routes";

const router = Router();

router.use("/news" , newsRoutes);
router.use("/home" , homeRoutes);

export { router };