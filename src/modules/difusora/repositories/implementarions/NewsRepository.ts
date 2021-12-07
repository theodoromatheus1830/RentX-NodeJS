
import { getRepository, Repository } from "typeorm";
import { News } from "../../entities/News"
import { INewsRepository } from "../INewsRepository";

class NewsRepository implements INewsRepository{

    private repository: Repository<News>;

    constructor(){
        this.repository = getRepository(News);
    }

    async list(): Promise<News[]>{
        const categories = await this.repository.find();
        return categories;
    }

}
export { NewsRepository }