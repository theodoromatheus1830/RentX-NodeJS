import { v4 as uuidv4} from 'uuid';
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { TV } from './TV';
import { FM } from './FM';
import { Promotions } from './Promotions';

@Entity("cities")
class Cities{
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    abbreviation: string;

    @Column()
    firstColor: string;
    
    @Column()
    secondColor: string;

    @OneToMany(type => TV, tv => tv.cities)
    tv: TV[];

    @OneToMany(type => FM, fm => fm.cities)
    fm: FM[];

    @OneToMany(type => Promotions, promotions => promotions.cities)
    promotions: Promotions[];

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Cities };