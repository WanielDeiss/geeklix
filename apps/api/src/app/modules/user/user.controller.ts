import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserParam, UserQuery } from '@geeklix/api-interfaces';
import { first } from 'rxjs/operators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':name')
  getUserData(@Param() user: UserParam, @Query() query: UserQuery, @Res() res) {
    this.userService.getUser({ user, query });

    this.userService.userData$.pipe(first()).subscribe((data) => {
      res.status(HttpStatus.OK).send(data);
      res.end();
    });
  }
}
