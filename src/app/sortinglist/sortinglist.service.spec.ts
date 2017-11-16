import { TestBed, inject } from '@angular/core/testing';

import { SortinglistService } from './sortinglist.service';

describe('SortinglistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortinglistService]
    });
  });

  it('should be created', inject([SortinglistService], (service: SortinglistService) => {
    expect(service).toBeTruthy();
  }));
});
