import { News } from "../entities/News";

interface INewsCategoryDTO{
    title: string;
    text: string;
    image: string;
}

interface INewsRepository{
    list(): Promise<News[]>;
}

export { INewsRepository, INewsCategoryDTO };