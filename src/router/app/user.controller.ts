import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { routerSchema } from './schemas/routes';
import { PersistedUser, User } from 'src/repository/app/schemas/persisted-user';
import { ForRepositoryUserPersisting } from '../ports/drivens/for-repository-persisting';
import { RouterUserPersister } from 'src/repository/adapters/drivers/router-persister';


@Controller('users')
export class UserController implements ForRepositoryUserPersisting {
    constructor(
        private routerUserPersister: RouterUserPersister
    ) {}

    @Get(routerSchema.users.allUsers)
    async getUsers(): Promise<PersistedUser[] | []> {
        try {
            const getAll = await this.routerUserPersister.getUsers();
            return getAll;
        }
        catch (error){
            console.log(`Cannot get all products when requiring ${routerSchema.users.allUsers} path`, error)
            return [];
        }     
    };

    @Get(routerSchema.users.oneUser)
    async getUser(email: string): Promise<PersistedUser | null> {
        try{
            const getOne = await this.routerUserPersister.getUser(email);
            return getOne
        } catch (error) {
            console.log(`One users could not be found ${routerSchema.users.oneUser}`, error)
            return null
        }
    };

    @Post(routerSchema.users.createUser)
    async createUser(@Body() user: User): Promise<PersistedUser | null>{
        try{
            const createdUser = await this.routerUserPersister.createUser(user);
            return createdUser;
        } catch (error) {
            console.log(`Could not create user in path ${routerSchema.users.createUser}`, error)
            return null
        }
    };

    @Put(routerSchema.users.updateUser)
    async updateUser(email: string, user: User): Promise<PersistedUser | null>{
        try{
            const updatedUser = await this.routerUserPersister.updateUser(email, user);
            return updatedUser;
        } catch (error) {
            console.log(`Could not update user in path ${routerSchema.users.updateUser}`, error)
            return null
        }
    };

    @Delete(routerSchema.users.deleteUser)
    async deleteUser(email: string): Promise<PersistedUser | null> {
        try{
        const deletedUser = await this.routerUserPersister.deleteUser(email);
        return deletedUser;
        } catch (error) {
            console.log(`The user  could not be deleted ${routerSchema.users.deleteUser}`, error)
        }
    };

}