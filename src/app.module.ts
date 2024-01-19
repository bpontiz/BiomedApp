import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { ProductModule } from './modules/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      retryDelay: 2000,
      retryAttempts: 10,
      synchronize: false,
    }),
    UserModule,
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
