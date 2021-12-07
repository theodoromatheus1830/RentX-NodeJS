import { Cities } from "../entities/Cities";

interface ICitiesDTO{
    name: string;
    abbreviation: string;
    firstColor: string;
    secondColor: string;
}

interface ICitiesRepository{
    list(): Promise<Cities[]>;
}

export { ICitiesRepository, ICitiesDTO };