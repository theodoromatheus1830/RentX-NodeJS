import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNewsUseCase } from "./ListNewsUseCase";

class ListNewsController{
    async handle(request: Request, response: Response): Promise<Response>{

        const listNewsUseCase = container.resolve(ListNewsUseCase);
        const all = await listNewsUseCase.execute();
        return response.json(all);
    }
}

export { ListNewsController };