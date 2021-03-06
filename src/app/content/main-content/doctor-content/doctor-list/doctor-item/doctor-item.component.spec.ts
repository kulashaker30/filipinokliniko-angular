import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorItemComponent } from './doctor-item.component';

describe('DoctorItemComponent', () => {
  let component: DoctorItemComponent;
  let fixture: ComponentFixture<DoctorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
