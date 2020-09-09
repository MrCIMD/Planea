import { TableDatabase } from './table-database.model';
import { Project } from './project.model';
import { User } from './user.model';
import { TeamRole } from './team-role.model';

export class UserProject extends TableDatabase {
  // tslint:disable-next-line: variable-name
  public id_panel: number;
  // tslint:disable-next-line: variable-name
  public id_user: number;
  // tslint:disable-next-line: variable-name
  public id_team_role: number;
  public order: number;

  public project?: Project;
  public user?: User;
  // tslint:disable-next-line: variable-name
  public team_role?: TeamRole;
}
