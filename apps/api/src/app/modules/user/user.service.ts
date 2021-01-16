import { UserParam, UserQuery } from '@geeklix/api-interfaces';
import { Injectable } from '@nestjs/common';
import * as Geekdo from 'geekdo-sdk';
import { UserResult } from 'geekdo-sdk/dist/interfaces';
import { Subject } from 'rxjs';

interface UserServiceGetUserArgs {
  user: UserParam;
  query?: UserQuery;
}

@Injectable()
export class UserService {
  userData$ = new Subject<UserResult>();
  getUser(args: UserServiceGetUserArgs) {
    Geekdo.user({ name: args.user.name }).subscribe((userResult) =>
      this.userData$.next(userResult)
    );
  }
}
