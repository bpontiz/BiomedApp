import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
