import { container } from "tsyringe";
import { ICitiesRepository } from "../../modules/difusora/repositories/ICitiesRepository";
import { CitiesRepository } from "../../modules/difusora/repositories/implementarions/CitiesRepository";
import { NewsRepository } from "../../modules/difusora/repositories/implementarions/NewsRepository";
import { INewsRepository } from "../../modules/difusora/repositories/INewsRepository";


// INewsRepository
container.registerSingleton<INewsRepository>(
    "NewsRepository",
    NewsRepository
);

// INewsRepository
container.registerSingleton<ICitiesRepository>(
    "CitiesRepository",
    CitiesRepository
);
