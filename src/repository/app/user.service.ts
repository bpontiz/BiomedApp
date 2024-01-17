import { Injectable } from '@nestjs/common';
import { RouterUserPersister } from '../adapters/drivers/router-persister';
import { PersistedUser } from './schemas/persisted-user';

@Injectable()
export class UserService implements RouterUserPersister {
    constructor() {}

    async getUsers(): Promise<PersistedUser[] | []> {
        try {
            return [
                { id: 0, name: "Mike Malcowinks", age: "22"},
                { id: 1, name: "Bruce Poderoso", age: "26"}
            ];
        }
        catch {
            return [];
        }
    }

};
