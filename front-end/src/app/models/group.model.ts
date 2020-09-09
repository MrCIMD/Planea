import { TableDatabase } from './table-database.model';
import { Project } from './project.model';

export class Group extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_panel: number;
  public name: string;
  public order: number;
  public project?: Project;
}
