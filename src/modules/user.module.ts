import { Module } from '@nestjs/common';
import { UserService } from 'src/repository/app/user.service';
import { UserController } from 'src/router/app/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/repository/app/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
