import { Request, Response } from "express";
import { container } from "tsyringe";
import { HomeUseCase } from "./HomeUseCase";

class HomeController{
    async handle(request: Request, response: Response): Promise<Response>{

        const homeUseCase = container.resolve(HomeUseCase);
        const all = await homeUseCase.execute();
        return response.json(all);
    }
}

export { HomeController };