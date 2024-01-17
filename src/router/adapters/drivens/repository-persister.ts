import { RouterProductPersister, RouterUserPersister } from "src/repository/adapters/drivers/router-persister";
import { Product } from "src/router/app/schemas/product";
import { User } from "src/router/app/schemas/user";
import { ForRepositoryProductPersisting, ForRepositoryUserPersisting } from "src/router/ports/drivens/for-repository-persisting";


export class RepositoryUserPersister implements ForRepositoryUserPersisting {
    constructor() {}

    getUsers(): Promise<User[] | []> {
        return Promise.resolve(new RouterUserPersister().getUsers());
    };

}

export class RepositoryProductPersister implements ForRepositoryProductPersisting {
    constructor() {}

    getProducts(): Promise<Product[] | []> {
        return Promise.resolve(new RouterProductPersister().getProducts());
    };

};