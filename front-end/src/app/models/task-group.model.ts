import { TableDatabase } from './table-database.model';

export class TaskGroup extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_group: number;
  // tslint:disable-next-line: variable-name
  public id_task: number;
  public order: number;
}
