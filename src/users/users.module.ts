import { Module } from '@nestjs/common';
import { usersService } from './users.service';
import { usersController } from './users.controller';
import { usersRepository } from './users.repository';
@Module({
  controllers: [usersController],
  providers: [usersService, usersRepository],
})
export class usersModule {}
