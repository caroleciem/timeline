import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardEditComponent } from './timeline-card-edit.component';

describe('TimelineCardEditComponent', () => {
  let component: TimelineCardEditComponent;
  let fixture: ComponentFixture<TimelineCardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
