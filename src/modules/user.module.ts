import { Module } from '@nestjs/common';
import { UserService } from 'src/repository/app/user.service';
import { UserController } from 'src/router/app/user.controller';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
