import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditDeleteComponent } from './view-edit-delete.component';

describe('ViewEditDeleteComponent', () => {
  let component: ViewEditDeleteComponent;
  let fixture: ComponentFixture<ViewEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
