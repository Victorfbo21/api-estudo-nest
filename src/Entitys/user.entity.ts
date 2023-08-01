import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    strategy: "increment"
    @Column({ length: 500 })
    name: string;

    @Column('text')
    email: string;

    @Column()
    documento: string;

    @Column()
    password: string;
}