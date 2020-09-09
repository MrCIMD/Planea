import { TestBed } from '@angular/core/testing';

import { UserProjectPermissionService } from './user-project-permission.service';

describe('UserProjectPermissionService', () => {
  let service: UserProjectPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProjectPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
