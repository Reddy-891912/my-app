import { TestBed } from '@angular/core/testing';

import { ToDoTaskViewService } from './to-do-task-view.service';

describe('ToDoTaskViewService', () => {
  let service: ToDoTaskViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoTaskViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
