import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorOrdersComponent } from './view-doctor-orders.component';

describe('ViewDoctorOrdersComponent', () => {
  let component: ViewDoctorOrdersComponent;
  let fixture: ComponentFixture<ViewDoctorOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
