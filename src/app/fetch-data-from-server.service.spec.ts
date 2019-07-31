import { TestBed } from '@angular/core/testing';

import { FetchDataFromServerService } from './fetch-data-from-server.service';

describe('FetchDataFromServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchDataFromServerService = TestBed.get(FetchDataFromServerService);
    expect(service).toBeTruthy();
  });
});
