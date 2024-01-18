import { RouterProductPersister, RouterUserPersister } from "src/repository/adapters/drivers/router-persister";
import { Product } from "src/router/app/schemas/product";
import { User } from "src/router/app/schemas/user";
import { ForRepositoryProductPersisting, ForRepositoryUserPersisting } from "src/router/ports/drivens/for-repository-persisting";


export class RepositoryUserPersister implements ForRepositoryUserPersisting {
    constructor() {}

    getUsers(): Promise<User[] | []> {
        return Promise.resolve(new RouterUserPersister().getUsers());
    };

    getUser(email: string): Promise<User | null> {
        return Promise.resolve(new RouterUserPersister().getUsers(email));
    };

    createUser(user:User): Promise<User | null> {
        return Promise.resolve(new RouterUserPersister().createUser(user));
    };
    updateUser(email:string, user:User): Promise<User | null> {
        return Promise.resolve(new RouterUserPersister().updateUser(email, user))
    };

    deleteUser(email: string): Promise<User | null> {
        return Promise.resolve(new RouterUserPersister().deleteUser(email))
    }

}

export class RepositoryProductPersister implements ForRepositoryProductPersisting {
    constructor() {}

    getProducts(): Promise<Product[] | []> {
        return Promise.resolve(new RouterProductPersister().getProducts());
    };
    getProduct(id: number): Promise<Product | null> {
        return Promise.resolve(new RouterProductPersister().getProduct(id));
    };
    createProduct(product: Product): Promise<Product | null> {
        return Promise.resolve(new RouterProductPersister().createProduct(product));
    };
    updateProduct(id: number, product: Product): Promise<Product | null> {
        return Promise.resolve(new RouterProductPersister().updateProduct(id, product));
    };
    deleteProduct(id:number): Promise<Product | null> {
        return Promise.resolve(new RouterProductPersister().deleteProduct(id));
    }

};