import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRssFeedItemComponent } from './medical-rss-feed-item.component';

describe('MedicalRssFeedItemComponent', () => {
  let component: MedicalRssFeedItemComponent;
  let fixture: ComponentFixture<MedicalRssFeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRssFeedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRssFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
