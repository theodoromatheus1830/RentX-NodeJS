import fs from "fs";
import csvParse from "csv-parse";
import { CategoriesRepository } from "../../repositories/implementarions/CategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IImportCategory{
    name: string;
    description: string;
}
@injectable()
class ImportCategoryUseCase{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository){}

    loadCategory(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse();
    
            stream.pipe(parseFile);
    
            parseFile.on("data", async (line) => {
                const [ name, description ] = line;
                categories.push({
                    name,
                    description
                });
            }).on("end",() => {
                fs.promises.unlink(file.path);
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            })
        });
    }
    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategory(file);
        categories.map(async category => {
            const { name, description } = category;
            const existCategory = await this.categoriesRepository.findByName(name);

            if(!existCategory){
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
        console.log('categories', categories);
    }
}

export { ImportCategoryUseCase };