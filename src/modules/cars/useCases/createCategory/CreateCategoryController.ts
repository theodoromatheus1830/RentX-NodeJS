import { Request, Response } from "express";
import { Category } from "../../model/Category";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categories: Category[] = [];

class CreateCategoryController{

    constructor(private createCategoryUseCase: CreateCategoryUseCase){

    }

    handle(request: Request, response: Response): Response{
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });
    
        return response.status(201).send();
    }
}
export { CreateCategoryController };