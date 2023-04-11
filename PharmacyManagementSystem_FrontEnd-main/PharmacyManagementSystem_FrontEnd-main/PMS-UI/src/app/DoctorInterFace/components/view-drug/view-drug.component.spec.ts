import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDoctorDrugComponent } from './view-drug.component';

;

describe('ViewDrugComponent', () => {
  let component: ViewDoctorDrugComponent;
  let fixture: ComponentFixture<ViewDoctorDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
