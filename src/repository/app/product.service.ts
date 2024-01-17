import { Injectable } from '@nestjs/common';
import { PersistedProduct } from './schemas/persisted-product';

@Injectable()
export class ProductService {
    constructor() {}

    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            return [
                { id: 0, title: "MECHA XYZ", status: "Available"},
                { id: 1, title: "CAPX AAB", status: "Repairing"}
            ];;
        }
        catch {
            return [];
        }
    }
};
