import { UserParameters } from 'geekdo-sdk/dist/interfaces';

export interface UserParam {
  name: string;
}

export type UserQuery = Omit<UserParameters, 'name'>;
