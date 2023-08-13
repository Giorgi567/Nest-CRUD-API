import { Injectable } from '@nestjs/common';
import { usersRepository } from './users.repository';
import { IcreateUser } from 'src/data-interfaces/post.user.interface';
import { IupdateUser } from 'src/data-interfaces/put.user.interface';
@Injectable()
export class usersService {
  constructor(private userRepo: usersRepository) {}

  async getUsers() {
    return this.userRepo.getUsers();
  }
  async getUser(id: number) {
    return this.userRepo.getUser(id);
  }
  async createUser(Body: IcreateUser) {
    return this.userRepo.createUser(Body);
  }
  async IupdateUser(id: number, Body: IupdateUser) {
    return this.userRepo.updateUser(id, Body);
  }
  async deleteUser(id: number) {
    return this.userRepo.deleteUser(id);
  }
}
