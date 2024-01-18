import { Module } from '@nestjs/common';
import { ProductService } from 'src/repository/app/product.service';
import { ProductController } from 'src/router/app/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/repository/app/entities/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity])
    ],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
