import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getData(): string {
    return 'There is nothing to see here.';
  }
}
