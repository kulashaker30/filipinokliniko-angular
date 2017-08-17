import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDoctorsContentComponent } from './sidebar-doctors-content.component';

describe('SidebarDoctorsContentComponent', () => {
  let component: SidebarDoctorsContentComponent;
  let fixture: ComponentFixture<SidebarDoctorsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDoctorsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDoctorsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
