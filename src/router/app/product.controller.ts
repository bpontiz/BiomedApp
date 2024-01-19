import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { routerSchema } from './schemas/routes';
import { PersistedProduct, Product } from 'src/repository/app/schemas/persisted-product';
import { ForRepositoryProductPersisting } from '../ports/drivens/for-repository-persisting';
import { RouterProductPersister } from 'src/repository/adapters/drivers/router-persister';

@Controller('products')
export class ProductController implements ForRepositoryProductPersisting {
    constructor(
        private routerProductPersister: RouterProductPersister
    ) {}

    @Get(routerSchema.products.allProducts)
    async getProducts(): Promise<PersistedProduct[] | []> {
        try {
            const getAll = await this.routerProductPersister.getProducts();
            return getAll;
        } catch (error) {
            console.log(`Cannot get all products when requiring ${routerSchema.products.allProducts}`, error)
            return [];
        }        
    };

    @Get(routerSchema.products.oneProduct)
    async getProduct(@Param(`id`) id: number): Promise<PersistedProduct | null> {
        try{
            const getOne = await this.routerProductPersister.getProduct(id);
            return getOne
        } catch (error) {
            console.log(`Cannot get the product when you require ${routerSchema.products.oneProduct}`, error);
            return null;
        }
    };

    @Post(routerSchema.products.createProduct)
    async createProduct(@Body() product: Product): Promise<PersistedProduct | null> {
        try {
            const newProduct = await this.routerProductPersister.createProduct(product);
            return newProduct;
        } catch (error) {
            console.log(`The product cannot be created in the router ${routerSchema.products.createProduct}`, error);
            return null;
        }
    };

    @Put(routerSchema.products.updateProduct)
    async updateProduct(@Param(`id`) id: number,@Body() product: Product): Promise<PersistedProduct | null> {
        try {
            const updatedProduct = await this.routerProductPersister.updateProduct(id, product)
            return updatedProduct
        } catch (error) {
            console.log(`Unable to update the product on the route ${routerSchema.products.updateProduct}`, error);
            return null;
        }
    };
    
    @Delete(routerSchema.products.deleteProduct)
    async deleteProduct(@Param(`id`) id: number): Promise<PersistedProduct | null> {
        try{
            const deletedProduct = await this.routerProductPersister.deleteProduct(id);
            return deletedProduct
        } catch (error) {
            console.log(`The product could not be deleted ${routerSchema.products.deleteProduct}`, error);
            return null;
        }
    };
}
