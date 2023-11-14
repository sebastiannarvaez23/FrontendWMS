import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrimaryComponent } from './modal-primary.component';

describe('ModalPrimaryComponent', () => {
  let component: ModalPrimaryComponent;
  let fixture: ComponentFixture<ModalPrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPrimaryComponent]
    });
    fixture = TestBed.createComponent(ModalPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
