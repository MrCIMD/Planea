import { TableDatabase } from './table-database.model';

export class UserProject extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_panel: number;
  // tslint:disable-next-line: variable-name
  public id_user: number;
  // tslint:disable-next-line: variable-name
  public id_team_role: number;
  public order: number;
}
