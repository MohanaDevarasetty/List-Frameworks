import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowerTabComponent } from './grower-tab.component';

describe('GrowerTabComponent', () => {
  let component: GrowerTabComponent;
  let fixture: ComponentFixture<GrowerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
