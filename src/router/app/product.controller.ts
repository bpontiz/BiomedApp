import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { RepositoryProductPersister } from '../adapters/drivens/repository-persister';
import { routerSchema } from './schemas/routes';
import { PersistedProduct, Product } from 'src/repository/app/schemas/persisted-product';

@Controller('products')
export class ProductController {
    constructor() {}

    @Get(routerSchema.products.allProducts)
    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            const getAll = await new RepositoryProductPersister().getProducts();
            return getAll;
        } catch (error) {
            console.log(`Cannot get all products when requiring ${routerSchema.products.allProducts}`, error)
            return [];
        }        
    };

    @Get(routerSchema.products.oneProduct)
    async getProduct(id: number): Promise<PersistedProduct | null> {
        try{
            const getOne = await new RepositoryProductPersister().getProduct(id);
            return getOne
        } catch (error) {
            console.log(`Cannot get the product when you require ${routerSchema.products.oneProduct}`, error);
            return null;
        }
    };

    @Post(routerSchema.products.createProduct)
    async createProduct(product: Product): Promise<PersistedProduct | null> {
        try {
            const newProduct = await new RepositoryProductPersister().createProduct(product);
            return newProduct;
        } catch (error) {
            console.log(`The product cannot be created in the router ${routerSchema.products.createProduct}`, error);
            return null;
        }
    };

    @Put(routerSchema.products.updateProduct)
    async updateProduct(id: number, product: Product): Promise<PersistedProduct | null> {
        try {
            const updatedProduct = await new RepositoryProductPersister().updateProduct(id, product)
            return updatedProduct
        } catch (error) {
            console.log(`Unable to update the product on the route ${routerSchema.products.updateProduct}`, error);
            return null;
        }
    };
    
    @Delete(routerSchema.products.deleteProduct)
    async deleteProduct(id: number): Promise<PersistedProduct | null> {
        try{
            const deletedProduct = await new RepositoryProductPersister().deleteProduct(id);
            return deletedProduct
        } catch (error) {
            console.log(`The product could not be deleted ${routerSchema.products.deleteProduct}`, error);
            return null;
        }
    };
}
