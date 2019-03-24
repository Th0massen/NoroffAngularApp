import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvScheduleCardComponent } from './tv-schedule-card.component';

describe('TvScheduleCardComponent', () => {
  let component: TvScheduleCardComponent;
  let fixture: ComponentFixture<TvScheduleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvScheduleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvScheduleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
