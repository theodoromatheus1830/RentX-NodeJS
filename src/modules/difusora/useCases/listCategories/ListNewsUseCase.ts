import { inject, injectable } from "tsyringe";
import { News } from "../../entities/News";
import { INewsRepository } from "../../repositories/INewsRepository";

interface IRequest{
    title: string;
    text: string;
    image: string;
}

@injectable()
class ListNewsUseCase{
    constructor(
        @inject("NewsRepository")
        private newsRepository: INewsRepository){
    }

    async execute(): Promise<News[]>{
        const news = await this.newsRepository.list();
        return news;
    }
}

export { ListNewsUseCase };