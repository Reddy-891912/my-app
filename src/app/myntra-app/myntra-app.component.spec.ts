import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyntraAppComponent } from './myntra-app.component';

describe('MyntraAppComponent', () => {
  let component: MyntraAppComponent;
  let fixture: ComponentFixture<MyntraAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyntraAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyntraAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
