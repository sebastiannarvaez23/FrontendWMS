import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleorderSearchComponent } from './saleorder-search.component';

describe('SaleorderSearchComponent', () => {
  let component: SaleorderSearchComponent;
  let fixture: ComponentFixture<SaleorderSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleorderSearchComponent]
    });
    fixture = TestBed.createComponent(SaleorderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
