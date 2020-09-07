import { TableDatabase } from './table-database.model';

export class Comment extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_task: number;
  // tslint:disable-next-line: variable-name
  public id_user: number;
  public comment: string;
}
