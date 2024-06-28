import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskViewParentComponent } from './task-view-parent.component';

describe('TaskViewParentComponent', () => {
  let component: TaskViewParentComponent;
  let fixture: ComponentFixture<TaskViewParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskViewParentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
