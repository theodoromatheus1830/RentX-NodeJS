import { v4 as uuidv4} from 'uuid';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Cities } from './Cities';

@Entity("promotions")
class Promotions{
    @PrimaryColumn()
    id?: string;

    @Column()
    citiesId: string;

    @Column()
    title: string;

    @Column()
    image: string;
    
    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(type => Cities, cities => cities.promotions)
    cities: Cities;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Promotions };