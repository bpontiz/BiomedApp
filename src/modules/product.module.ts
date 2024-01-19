import { Module } from '@nestjs/common';
import { ProductService } from 'src/repository/app/product.service';
import { ProductController } from 'src/router/app/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/repository/app/entities/product.entity';
import { RouterProductPersister } from 'src/repository/adapters/drivers/router-persister';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity])
    ],
    controllers: [ProductController],
    providers: [ProductService, RouterProductPersister]
})
export class ProductModule {}
