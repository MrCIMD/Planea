import { TestBed } from '@angular/core/testing';

import { TaskStatuService } from './task-statu.service';

describe('TaskStatuService', () => {
  let service: TaskStatuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStatuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
