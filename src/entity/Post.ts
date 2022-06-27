import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";
@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: string
    @Column()
    content: string
    @Column()
    @CreateDateColumn()
    created_at: Date

}