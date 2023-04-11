import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorOrderDescComponent } from './view-doctor-order-desc.component';

describe('ViewDoctorOrderDescComponent', () => {
  let component: ViewDoctorOrderDescComponent;
  let fixture: ComponentFixture<ViewDoctorOrderDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorOrderDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorOrderDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
