import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingListComponent } from './picking-list.component';

describe('PickingListComponent', () => {
  let component: PickingListComponent;
  let fixture: ComponentFixture<PickingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickingListComponent]
    });
    fixture = TestBed.createComponent(PickingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
