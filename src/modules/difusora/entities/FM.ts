import { v4 as uuidv4} from 'uuid';
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Cities } from './Cities';

@Entity("fm")
class FM{
    @PrimaryColumn()
    id?: string;

    @Column()
    citiesId: string;

    @Column()
    label: string;

    @Column()
    image: string;
    
    @Column()
    url: string;

    @ManyToOne(type => Cities, cities => cities.fm)
    cities: Cities;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { FM };