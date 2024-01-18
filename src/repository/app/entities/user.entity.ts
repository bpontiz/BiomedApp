import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Permissions } from '../schemas/persisted-user';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 50, unique: true})
    email: string;

    @Column({length: 100})
    password: string;

    @Column()
    permissions: Permissions;
};