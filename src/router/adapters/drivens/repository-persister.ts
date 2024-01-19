import { RouterProductPersister, RouterUserPersister } from "src/repository/adapters/drivers/router-persister";
import { PersistedProduct, Product } from "src/repository/app/schemas/persisted-product";
import { PersistedUser, User } from "src/repository/app/schemas/persisted-user";

import { ForRepositoryProductPersisting, ForRepositoryUserPersisting } from "src/router/ports/drivens/for-repository-persisting";

export class RepositoryUserPersister implements ForRepositoryUserPersisting {
    constructor(
        private routerUserPersister: RouterUserPersister
    ) {}

    getUsers(): Promise<PersistedUser[] | []> {
        return Promise.resolve(this.routerUserPersister.getUsers());
    };

    getUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(this.routerUserPersister.getUser(email));
    };

    createUser(user: User): Promise<PersistedUser | null> {
        return Promise.resolve(this.routerUserPersister.createUser(user));
    };
    updateUser(email:string, user:PersistedUser): Promise<PersistedUser | null> {
        return Promise.resolve(this.routerUserPersister.updateUser(email, user))
    };

    deleteUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(this.routerUserPersister.deleteUser(email))
    };

}

export class RepositoryProductPersister implements ForRepositoryProductPersisting {
    constructor() {}

    getProducts(): Promise<PersistedProduct[] | []> {
        return Promise.resolve(new RouterProductPersister().getProducts());
    };

    getProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(new RouterProductPersister().getProduct(id));
    };

    createProduct(product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(new RouterProductPersister().createProduct(product));
    };

    updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(new RouterProductPersister().updateProduct(id, product));
    };

    deleteProduct(id:number): Promise<PersistedProduct | null> {
        return Promise.resolve(new RouterProductPersister().deleteProduct(id));
    };

};