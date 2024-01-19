import { Module } from '@nestjs/common';
import { UserService } from 'src/repository/app/user.service';
import { UserController } from 'src/router/app/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/repository/app/entities/user.entity';
import { RouterUserPersister } from 'src/repository/adapters/drivers/router-persister';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UserController],
    providers: [UserService, RouterUserPersister],
})
export class UserModule {}
