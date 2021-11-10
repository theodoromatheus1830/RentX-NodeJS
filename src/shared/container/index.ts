import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementarions/CategoriesRepository";
import { SpecificationsRespository } from "../../modules/cars/repositories/implementarions/SpecificationsRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository";


// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

// ISpecificationsRepository
container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationsRespository
);