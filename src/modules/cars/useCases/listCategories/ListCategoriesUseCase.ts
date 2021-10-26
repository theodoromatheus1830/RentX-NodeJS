import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}
class ListCategoriesUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){
    }

    execute(){
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };