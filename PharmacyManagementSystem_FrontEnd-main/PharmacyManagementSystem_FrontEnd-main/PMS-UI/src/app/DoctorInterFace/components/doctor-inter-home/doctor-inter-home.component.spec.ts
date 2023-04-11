import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInterHomeComponent } from './doctor-inter-home.component';

describe('DoctorInterHomeComponent', () => {
  let component: DoctorInterHomeComponent;
  let fixture: ComponentFixture<DoctorInterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
