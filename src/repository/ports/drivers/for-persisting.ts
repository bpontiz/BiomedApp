import { PersistedProduct, Product } from "src/repository/app/schemas/persisted-product";
import { PersistedUser, User } from "src/repository/app/schemas/persisted-user";


export interface ForUserPersisting {
    getUsers(): Promise<PersistedUser[] | []>;
    getUser(email: string): Promise<PersistedUser | null>;
    createUser(user: User): Promise<PersistedUser | null>;
    updateUser(email: string, user: User): Promise<PersistedUser | null>;
    deleteUser(email: string): Promise<PersistedUser | null>;
};

export interface ForProductPersisting {
    getProduct(id: number): Promise<PersistedProduct | null>;
    getProducts(): Promise<PersistedProduct[] | []>;
    createProduct(product: Product): Promise<PersistedProduct | null>;
    updateProduct(id: number, product: Product): Promise<PersistedProduct | null>;
    deleteProduct(id: number): Promise<PersistedProduct | null>;
};