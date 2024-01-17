import { PersistedProduct } from "src/repository/app/schemas/persisted-product";
import { PersistedUser } from "src/repository/app/schemas/persisted-user";


export interface ForUserPersisting {
    getUsers(): Promise<PersistedUser[] | []>;

};

export interface ForProductPersisting {
    getProducts(): Promise<PersistedProduct[] | []>;
    
};