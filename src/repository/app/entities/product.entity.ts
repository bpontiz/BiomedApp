import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../schemas/persisted-product';

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column({length: 50})
    serie: string;

    @Column()
    status: Status;

    @Column({length: 25, nullable: true})
    last_service: string;

    @Column({length: 25, nullable: true})
    next_service: string;

    @Column({length: 1000})
    description: string;

    @Column({length: 100})
    area: string;

    @Column({length: 200})
    image: string;

    @Column({length: 100})
    timestamp: string;
};