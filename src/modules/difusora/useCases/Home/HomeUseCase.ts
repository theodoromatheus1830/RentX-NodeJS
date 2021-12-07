import { inject, injectable } from "tsyringe";
import { Cities } from "../../entities/Cities";
import { ICitiesRepository } from "../../repositories/ICitiesRepository";

@injectable()
class HomeUseCase{
    constructor(
        @inject("CitiesRepository")
        private citiesRepository: ICitiesRepository){
    }

    async execute(): Promise<Cities[]>{
        const cities = await this.citiesRepository.list();
        return cities;
    }
}

export { HomeUseCase };