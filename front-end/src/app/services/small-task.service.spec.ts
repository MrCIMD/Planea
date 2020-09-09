import { TestBed } from '@angular/core/testing';

import { SmallTaskService } from './small-task.service';

describe('SmallTaskService', () => {
  let service: SmallTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmallTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
