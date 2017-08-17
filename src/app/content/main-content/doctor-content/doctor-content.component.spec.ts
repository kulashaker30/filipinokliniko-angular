import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorContentComponent } from './doctor-content.component';

describe('DoctorContentComponent', () => {
  let component: DoctorContentComponent;
  let fixture: ComponentFixture<DoctorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
