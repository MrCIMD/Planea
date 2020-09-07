import { TableDatabase } from './table-database.model';

export class UserProjectPermission extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_panel: number;
  // tslint:disable-next-line: variable-name
  public id_user: number;
  // tslint:disable-next-line: variable-name
  public id_permission: number;
}
