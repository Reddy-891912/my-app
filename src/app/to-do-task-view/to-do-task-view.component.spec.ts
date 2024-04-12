import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTaskViewComponent } from './to-do-task-view.component';

describe('ToDoTaskViewComponent', () => {
  let component: ToDoTaskViewComponent;
  let fixture: ComponentFixture<ToDoTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoTaskViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
