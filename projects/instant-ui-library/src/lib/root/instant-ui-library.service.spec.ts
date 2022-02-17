import { TestBed } from '@angular/core/testing';

import { InstantUiLibraryService } from './instant-ui-library.service';

describe('InstantUiLibraryService', () => {
  let service: InstantUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstantUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
