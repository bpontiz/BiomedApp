import { Product } from "src/router/app/schemas/product";
import { User } from "src/router/app/schemas/user";


export interface ForRepositoryUserPersisting {
    getUsers(): Promise<User[] | []>;
    
};

export interface ForRepositoryProductPersisting {
    getProducts(): Promise<Product[] | []>;
    
};