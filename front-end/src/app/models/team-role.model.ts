import { TableDatabase } from './table-database.model';

export class TeamRole extends TableDatabase {
  public role: string;
  public description: string;
  public icon: string;
}
