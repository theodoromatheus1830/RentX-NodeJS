import { v4 as uuidv4} from 'uuid';
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Cities } from './Cities';

@Entity("tv")
class TV{
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

    @ManyToOne(type => Cities, cities => cities.tv)
    cities: Cities;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { TV };