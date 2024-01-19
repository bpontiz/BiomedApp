import { Injectable } from "@nestjs/common";
import { ProductService } from "src/repository/app/product.service";
import { PersistedProduct, Product } from "src/repository/app/schemas/persisted-product";
import { PersistedUser, User } from "src/repository/app/schemas/persisted-user";
import { UserService } from "src/repository/app/user.service";
import { ForProductPersisting, ForUserPersisting } from "src/repository/ports/drivers/for-persisting";

@Injectable()
export class RouterUserPersister implements ForUserPersisting {
    constructor(
        private userService: UserService
    ) {}

    async getUsers(): Promise<PersistedUser[] | []> {
        return Promise.resolve(this.userService.getUsers());
    };

    getUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(this.userService.getUser(email));
    };

    createUser(user: User): Promise<PersistedUser | null> {
        return Promise.resolve(this.userService.createUser(user));
    };

    updateUser(email: string, user: User): Promise<PersistedUser | null> {
        return Promise.resolve(this.userService.updateUser(email, user));
    };

    deleteUser(email: string): Promise<PersistedUser | null> {
        return Promise.resolve(this.userService.deleteUser(email));
    };

};

@Injectable()
export class RouterProductPersister implements ForProductPersisting {
    constructor(
        private productService: ProductService
    ) {}    

    async getProducts(): Promise<PersistedProduct[] | []> {
        return Promise.resolve(this.productService.getProducts());
    };

    getProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(this.productService.getProduct(id));
    };

    createProduct(product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(this.productService.createProduct(product));
    };

    updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        return Promise.resolve(this.productService.updateProduct(id, product));
    };

    deleteProduct(id: number): Promise<PersistedProduct | null> {
        return Promise.resolve(this.productService.deleteProduct(id));
    };

};