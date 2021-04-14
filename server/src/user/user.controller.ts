import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('user')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('user')
  getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Post('user')
  createUser(@Body() data: UserModel) {
    return this.userService.addUser(data);
  }

  @Delete('user')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
