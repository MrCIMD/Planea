import { TableDatabase } from './table-database.model';

export class SmallTask extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_task: number;
  public name: string;
  public finished: boolean;
  public order: number;
}
