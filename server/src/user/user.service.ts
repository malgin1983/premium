import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}

  getAllUser = async (): Promise<UserModel[]> => {
    try {
      return await this.userRepository.find();
    } catch (e) {
      console.error('Error', e);
    }
  };

  getUser = async (id: number): Promise<UserModel> => {
    try {
      return await this.userRepository.findOne(id);
    } catch (e) {
      console.error('Error', e);
    }
  };

  addUser = async (user: UserModel) => {
    try {
      return await this.userRepository.create(user);
    } catch (e) {
      console.error('Error', e);
    }
  };

  deleteUser = async (id: number) => {
    try {
      return await this.userRepository.delete(id);
    } catch (e) {
      console.error('Error', e);
    }
  };
}
