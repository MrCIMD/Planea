import { TableDatabase } from './table-database.model';

export class Permission extends TableDatabase {
  public role: string;
  public description: string;
  public icon: string;
}
