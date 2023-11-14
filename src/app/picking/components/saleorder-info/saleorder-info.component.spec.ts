import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleorderInfoComponent } from './saleorder-info.component';

describe('SaleorderInfoComponent', () => {
  let component: SaleorderInfoComponent;
  let fixture: ComponentFixture<SaleorderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleorderInfoComponent]
    });
    fixture = TestBed.createComponent(SaleorderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
