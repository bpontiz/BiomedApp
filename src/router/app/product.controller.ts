import { Controller, Get } from '@nestjs/common';
import { Product } from './schemas/product';
import { RepositoryProductPersister } from '../adapters/drivens/repository-persister';

@Controller('products')
export class ProductController {
    constructor() {}

    @Get('/')
    async getUsers(): Promise<Product[] | []> {
        try {
            const getAll = await new RepositoryProductPersister().getProducts();

            return getAll;
        }
        catch {
            return [];
        }        
    };

;}
