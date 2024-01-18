import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Product } from './schemas/product';
import { RepositoryProductPersister } from '../adapters/drivens/repository-persister';
import { routerSchema } from './schemas/routes';

@Controller('products')
export class ProductController {
    constructor() {}

    @Get(routerSchema.products.allProducts)
    async getProducts(): Promise<Product[] | []> {
        try {
            const getAll = await new RepositoryProductPersister().getProducts();
            return getAll;
        } catch (error) {
            console.log(`Cannot get all products when requiring ${routerSchema.products.allProducts}`, error)
            return [];
        }        
    };

    @Get(routerSchema.products.oneProduct)
    async getProduct(id: number): Promise<Product | null> {
        try{
            const getOne = await new RepositoryProductPersister().getProduct(id);
            return getOne
        } catch (error) {
            console.log(`Cannot get the product when you require ${routerSchema.products.oneProduct}`, error);
            return null;
        }
    };

    @Post(routerSchema.products.createProduct)
    async createProduct(product: Product): Promise<Product | null> {
        try {
            const newProduct = await new RepositoryProductPersister().createProduct(product);
            return newProduct;
        } catch (error) {
            console.log(`The product cannot be created in the router ${routerSchema.products.createProduct}`, error);
            return null;
        }
    };

    @Put(routerSchema.products.updateProduct)
    async updateProduct(id: number, product: Product): Promise<Product | null> {
        try {
            const updatedProduct = await new RepositoryProductPersister().updateProduct(id, product)
            return updatedProduct
        } catch (error) {
            console.log(`Unable to update the product on the route ${routerSchema.products.updateProduct}`, error);
            return null;
        }
    };
    
    @Delete(routerSchema.products.deleteProduct)
    async deleteProduct(id: number): Promise<Product | null> {
        try{
            const deletedProduct = await new RepositoryProductPersister().deleteProduct(id);
            return deletedProduct
        } catch (error) {
            console.log(`The product could not be deleted ${routerSchema.products.deleteProduct}`, error);
            return null;
        }
    };
}
