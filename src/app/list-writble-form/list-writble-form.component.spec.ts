import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWritbleFormComponent } from './list-writble-form.component';

describe('ListWritbleFormComponent', () => {
  let component: ListWritbleFormComponent;
  let fixture: ComponentFixture<ListWritbleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWritbleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWritbleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
