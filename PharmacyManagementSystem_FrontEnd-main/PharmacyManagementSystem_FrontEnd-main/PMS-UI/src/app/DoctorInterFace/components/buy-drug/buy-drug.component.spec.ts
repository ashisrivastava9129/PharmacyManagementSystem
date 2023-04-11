import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDrugComponent } from './buy-drug.component';

describe('BuyDrugComponent', () => {
  let component: BuyDrugComponent;
  let fixture: ComponentFixture<BuyDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
