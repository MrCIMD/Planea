import { TableDatabase } from './table-database.model';
import { Task } from './task.model';
import { User } from './user.model';

export class Assigned extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_task: number;
  // tslint:disable-next-line: variable-name
  public id_user: number;
  public task?: Task;
  public user?: User;
}
