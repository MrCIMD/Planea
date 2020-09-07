import { TableDatabase } from './table-database.model';

export class User extends TableDatabase {
  public name?: string;
  public email: string;
  public password?: string;
  // tslint:disable-next-line: variable-name
  public password_confirmation?: string;
}
