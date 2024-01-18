import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { routerSchema } from './schemas/routes';
import { RepositoryUserPersister } from '../adapters/drivens/repository-persister';
import { User } from './schemas/user';

@Controller('users')
export class UserController implements RepositoryUserPersister {
    constructor() {}

    @Get(routerSchema.users.allUsers)
    async getUsers(): Promise<User[] | []> {
        try {
            const getAll = await new RepositoryUserPersister().getUsers();
            return getAll;
        }
        catch (error){
            console.log(`Cannot get all products when requiring ${routerSchema.users.allUsers} path`, error)
            return [];
        }     
    };

    @Get(routerSchema.users.oneUser)
    async getUser(email: string): Promise<User | null> {
        try{
            const getOne = await new RepositoryUserPersister().getUser(email)
            return getOne
        } catch (error) {
            console.log(`One users could not be found ${routerSchema.users.oneUser}`, error)
            return null
        }
    };

    @Post(routerSchema.users.createUser)
    async createUser(user: User): Promise<User | null>{
        try{
            const createdUser = await new RepositoryUserPersister.createUser(user);
            return createdUser;
        } catch (error) {
            console.log(`Could not create user in path ${routerSchema.users.createUser}`, error)
            return null
        }
    };

    @Put(routerSchema.users.updateUser)
    async updateUser(email: string, user: User): Promise<User | null>{
        try{
            const updatedUser = await new RepositoryUserPersister.updateUser(email, user);
            return updatedUser;
        } catch (error) {
            console.log(`Could not update user in path ${routerSchema.users.updateUser}`, error)
            return null
        }
    };

    @Delete(routerSchema.users.deleteUser)
    async deleteUser(email: string): Promise<User | null> {
        try{
        const deletedUser = await new RepositoryUserPersister.deleteUser(email);
        return deletedUser;
        } catch (error) {
            console.log(`The user  could not be deleted ${routerSchema.users.deleteUser}`, error)
        }
    };

}
