import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewsContentComponent } from './sidebar-news-content.component';

describe('SidebarNewsContentComponent', () => {
  let component: SidebarNewsContentComponent;
  let fixture: ComponentFixture<SidebarNewsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNewsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
