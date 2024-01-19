import { Injectable } from '@nestjs/common';
import { PersistedProduct, Product } from './schemas/persisted-product';
import { RouterProductPersister } from '../adapters/drivers/router-persister';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService implements RouterProductPersister {
    constructor() {}

    @InjectRepository(ProductEntity)
    private productEntity: Repository<ProductEntity>;

    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            const productDb = await this.productEntity.find();

            return productDb;
        }
        catch {
            return [];
        }
    };

    async getProduct(id: number): Promise<PersistedProduct | null> {
        try {
            const productById = await this.productEntity.findOneBy({id: id});

            if (productById) {
                return productById;
            };

            return null;
        }
        catch {
            return null;
        }
    };

    async createProduct(product: Product): Promise<PersistedProduct | null> {
        try {
            const generateTimeStamp = this.getISOTime();

            const productWithTimeStamp = {
                ...product,
                timestamp: generateTimeStamp,
            };

            const ProductDb = await this.productEntity.save(productWithTimeStamp);

            return ProductDb;
        }
        catch {
            return null;
        }
    };

    async updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        try {
            let productExistance: PersistedProduct | null;
            id ? productExistance = await this.getProduct(id) : productExistance = null;
            if (productExistance) {
                const updatedProduct = {
                    id: productExistance.id,
                    ...product
                };
                const ProductDb = await this.productEntity.save(updatedProduct);

                return ProductDb;
            };

            return null;
        }
        catch {
            return null;
        }
    };

    async deleteProduct(id: number): Promise<PersistedProduct | null> {
        try {
            const productToBeDeleted = await this.getProduct(id);

            if (!productToBeDeleted) {
                return null;
            };

            const ProductDb = await this.productEntity.remove(productToBeDeleted);

            return ProductDb;
        }
        catch {
            return null;
        }
    };

    getISOTime(): string {
        const getNow = new Date().toISOString().slice(0, -5) + 'Z';

        return getNow;
    };

};
