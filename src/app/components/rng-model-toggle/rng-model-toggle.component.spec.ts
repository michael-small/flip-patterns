import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RngModelToggleComponent } from './rng-model-toggle.component';

describe('RngModelToggleComponent', () => {
  let component: RngModelToggleComponent;
  let fixture: ComponentFixture<RngModelToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RngModelToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RngModelToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
