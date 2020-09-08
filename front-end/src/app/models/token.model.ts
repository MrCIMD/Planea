import { User } from './user.model';

export class Token {
  public user: User;
  public token: string;
  public expiration: number;
}
