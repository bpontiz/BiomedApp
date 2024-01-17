import { ProductService } from "src/repository/app/product.service";
import { PersistedProduct } from "src/repository/app/schemas/persisted-product";
import { PersistedUser } from "src/repository/app/schemas/persisted-user";
import { UserService } from "src/repository/app/user.service";
import { ForProductPersisting, ForUserPersisting } from "src/repository/ports/drivers/for-persisting";


export class RouterUserPersister implements ForUserPersisting {
    constructor() {}

    async getUsers(): Promise<PersistedUser[] | []> {
        try {
            return Promise.resolve(new UserService().getUsers());
        }
        catch {
            return [];
        }
    };

};

export class RouterProductPersister implements ForProductPersisting {
    constructor() {}

    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            return Promise.resolve(new ProductService().getProducts());
        }
        catch {
            return [];
        }
    };

};