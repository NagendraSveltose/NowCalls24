import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularServiceComponent } from './popular-service.component';

describe('PopularServiceComponent', () => {
  let component: PopularServiceComponent;
  let fixture: ComponentFixture<PopularServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
