import { TestBed } from '@angular/core/testing';

import { TvScheduleService } from './tv-schedule.service';

describe('TvScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvScheduleService = TestBed.get(TvScheduleService);
    expect(service).toBeTruthy();
  });
});
