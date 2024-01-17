import { Module } from '@nestjs/common';
import { ProductService } from 'src/repository/app/product.service';
import { ProductController } from 'src/router/app/product.controller';

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
