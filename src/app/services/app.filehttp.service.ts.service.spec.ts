import { TestBed } from '@angular/core/testing';

import { AppFilehttpServiceTsService } from './app.filehttp.service';

describe('AppFilehttpServiceTsService', () => {
  let service: AppFilehttpServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFilehttpServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
