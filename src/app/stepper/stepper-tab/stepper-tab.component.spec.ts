import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTabComponent } from './stepper-tab.component';

describe('StepperTabComponent', () => {
  let component: StepperTabComponent;
  let fixture: ComponentFixture<StepperTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
