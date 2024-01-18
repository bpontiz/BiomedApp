import { Controller, Get } from '@nestjs/common';
import { RepositoryUserPersister } from '../adapters/drivens/repository-persister';
import { User } from './schemas/user';

@Controller('users')
export class UserController implements RepositoryUserPersister {
    constructor() {}

    @Get('/')
    async getUsers(): Promise<User[] | []> {
        try {
            const getAll = await new RepositoryUserPersister().getUsers();

            return getAll;
        }
        catch {
            return [];
        }        
    };

}