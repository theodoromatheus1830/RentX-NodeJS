import { getRepository, Repository } from "typeorm";
import { Cities } from "../../entities/Cities";
import { FM } from "../../entities/FM";
import { TV } from "../../entities/TV";
import { ICitiesRepository } from "../ICitiesRepository";

interface IHomeReturn{
    id: string;
    cityName: string;
    cityAbbreviation: string;
    firstColor: string;
    secondColor: string;
    cityButtons: any;
    promotions: any;
}

class CitiesRepository implements ICitiesRepository{

    private repository: Repository<Cities>;

    constructor(){
        this.repository = getRepository(Cities);
    }

    async list(): Promise<IHomeReturn[]>{
        const cities = await this.repository.find({ relations: ["tv", "fm", "promotions"] });
        
        var homeReturnArr:IHomeReturn[] = [];

        cities.map(function(city) {
            var buttons = [];
            var arrayTV = city.tv;
            arrayTV.map(function(tv) {
                var empTV:TV;
                if(tv !== empTV){
                    buttons.push(tv);
                }
            });

            var arrayFM = city.fm;
            arrayFM.map(function(fm) {
                var empFM:FM;
                if(fm !== empFM){
                    buttons.push(fm);
                }
            });

            var homeReturn:IHomeReturn = {
                id : city.id,
                cityName : city.name,
                cityAbbreviation : city.abbreviation,
                firstColor : city.firstColor,
                secondColor : city.secondColor,
                cityButtons : buttons,
                promotions : city.promotions,
            }

            homeReturnArr.push(homeReturn);
        });

        return homeReturnArr;
    }
}
export { CitiesRepository, IHomeReturn }