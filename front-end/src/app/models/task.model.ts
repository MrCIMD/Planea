import { TableDatabase } from './table-database.model';

export class Task extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_panel: number;
  public name: string;
  public description: string;
  // tslint:disable-next-line: variable-name
  public id_status: number;
  public order: number;
  // tslint:disable-next-line: variable-name
  public id_progress: number;
  // tslint:disable-next-line: variable-name
  public id_priority: number;
  public note: string;
  public finished: boolean;
  // tslint:disable-next-line: variable-name
  public start_date: string;
  // tslint:disable-next-line: variable-name
  public end_date: string;
}
