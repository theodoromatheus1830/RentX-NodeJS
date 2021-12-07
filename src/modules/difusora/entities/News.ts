import { v4 as uuidv4} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("news")
class News{
    @PrimaryColumn()
    id?: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    image: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { News };