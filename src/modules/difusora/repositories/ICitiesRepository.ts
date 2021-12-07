import { IHomeReturn } from "./implementarions/CitiesRepository";

interface ICitiesDTO{
    name: string;
    abbreviation: string;
    firstColor: string;
    secondColor: string;
}

interface ICitiesRepository{
    list(): Promise<IHomeReturn[]>;
}

export { ICitiesRepository, ICitiesDTO };