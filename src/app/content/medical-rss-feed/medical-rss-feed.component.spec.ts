import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRssFeedComponent } from './medical-rss-feed.component';

describe('MedicalRssFeedComponent', () => {
  let component: MedicalRssFeedComponent;
  let fixture: ComponentFixture<MedicalRssFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRssFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRssFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
