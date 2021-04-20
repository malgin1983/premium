import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  getAllUser() {
    return 'Server is workss';
  }
}
