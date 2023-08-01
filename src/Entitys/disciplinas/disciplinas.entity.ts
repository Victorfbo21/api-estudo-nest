import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Disciplinas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    responsavel: string;

    @Column()
    area: string;

}