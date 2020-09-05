import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeRowsDesignComponent } from './merge-rows-design.component';

describe('MergeRowsDesignComponent', () => {
  let component: MergeRowsDesignComponent;
  let fixture: ComponentFixture<MergeRowsDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeRowsDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeRowsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
