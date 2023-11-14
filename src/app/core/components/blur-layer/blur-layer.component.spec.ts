import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurLayerComponent } from './blur-layer.component';

describe('BlurLayerComponent', () => {
  let component: BlurLayerComponent;
  let fixture: ComponentFixture<BlurLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlurLayerComponent]
    });
    fixture = TestBed.createComponent(BlurLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
