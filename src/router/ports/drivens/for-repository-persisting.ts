import { Product } from "src/router/app/schemas/product";
import { User } from "src/router/app/schemas/user";

export interface ForRepositoryUserPersisting {
    getUsers(): Promise<User[] | []>;
    getUser(email: string): Promise<User | null>;
    createUser(user: User): Promise<User | null>;
    updateUser(email: string, user: User): Promise<User | null>;
    deleteUser(email: string): Promise<User | null>;
    
};

export interface ForRepositoryProductPersisting {
    getProducts(): Promise<Product[] | []>;
    getProduct(id:number): Promise<Product | null>;
    createProduct(product:Product): Promise<Product | null>;
    updateProduct(product: Product): Promise<Product | null>;
    deleteProduct(id: number): Promise<Product | null>
};