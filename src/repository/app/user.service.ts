import { Injectable } from '@nestjs/common';
import { PersistedUser, User } from './schemas/persisted-user';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userEntity: Repository<UserEntity>
    ){}

    async getUsers(): Promise<PersistedUser[] | []> {
        try {
            const Userdb = this.userEntity.find();

            return Userdb;
        }
        catch (err){
            console.log(err)
            return [];
        }
    };

    async getUser(email: string): Promise<PersistedUser | null> {
        try {
            const UserDb = await this.userEntity.findOneBy({email: email});

            if (UserDb) {
                return UserDb;   
            };
            
            return null;
        }
        catch {
            return null;
        }
    };

    async createUser(user: User): Promise<PersistedUser | null> {
        try {
            const userExistance = await this.getUser(user.email);

            if (userExistance) {
                return null;
            };

            const usersPasswordHashed = {
                ...user,
                password: await this.encrypt(user.password) 
            };

            const UserDb = await this.userEntity.save(usersPasswordHashed);

            return UserDb;
        }
        catch (err){
            console.log(err)
            return null;
        }
    };

    async updateUser(email: string, user: User): Promise<PersistedUser | null> {
        try {
            const userExistance = await this.getUser(email);

            if (!userExistance) {
                return null;
            };

            const checkPasswords = await bcrypt.compare(user.password, userExistance.password);

            if (!checkPasswords) {
                
                const encryptPassword = await this.encrypt(user.password);

                const updatedUser = {
                    id: userExistance.id,
                    ...user,
                    password: encryptPassword,
                };

                const UserDb = await this.userEntity.save(updatedUser);
    
                return UserDb;
            };
            
            const updatedUser = {
                id: userExistance.id,
                ...user
            };

            const UserDb = await this.userEntity.save(updatedUser);

            return UserDb;
        }
        catch {
            return null;
        }
    };

    async deleteUser(email: string): Promise<PersistedUser | null> {
        try {
            const userToBeDeleted = await this.getUser(email);

            if (!userToBeDeleted) {
                return null;
            };

            const UserDb = await this.userEntity.remove(userToBeDeleted);

            return UserDb;
        }
        catch {
            return null;
        }
    };

    async encrypt(passwordToBeHashed: string): Promise<string> {
        const saltRounds: number = 10;
        const hashing = await bcrypt.hash(passwordToBeHashed, saltRounds);

        return hashing;
    };

};
