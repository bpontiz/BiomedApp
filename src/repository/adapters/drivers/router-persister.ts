import { ProductService } from "src/repository/app/product.service";
import { PersistedProduct, Product } from "src/repository/app/schemas/persisted-product";
import { PersistedUser, User } from "src/repository/app/schemas/persisted-user";
import { UserService } from "src/repository/app/user.service";
import { ForProductPersisting, ForUserPersisting } from "src/repository/ports/drivers/for-persisting";


export class RouterUserPersister implements ForUserPersisting {
    constructor() {}

    async getUsers(): Promise<PersistedUser[] | []> {
        return Promise.resolve(new UserService().getUsers());
    };

    getUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(new UserService().getUser(email));
    };

    createUser(user: User): Promise<PersistedUser | null> {
        return Promise.resolve(new UserService().createUser(user));
    };

    updateUser(email: string, user: User): Promise<PersistedUser | null> {
        return Promise.resolve(new UserService().updateUser(email, user));
    };

    deleteUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(new UserService().deleteUser(email));
    };

};

export class RouterProductPersister implements ForProductPersisting {
    constructor() {}

    async getProducts(): Promise<PersistedProduct[] | []> {
        return Promise.resolve(new ProductService().getProducts());
    };

    getProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(new ProductService().getProduct(id));
    };

    createProduct(product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(new ProductService().createProduct(product));
    };

    updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(new ProductService().updateProduct(id, product));
    };

    deleteProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(new ProductService().deleteProduct(id));
    };

};