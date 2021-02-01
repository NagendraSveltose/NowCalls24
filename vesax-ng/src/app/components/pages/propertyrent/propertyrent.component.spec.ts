import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyrentComponent } from './propertyrent.component';

describe('PropertyrentComponent', () => {
  let component: PropertyrentComponent;
  let fixture: ComponentFixture<PropertyrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
