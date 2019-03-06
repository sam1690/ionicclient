import { TestBed } from '@angular/core/testing';

import { SignuphttpService } from './signuphttp.service';

describe('SignuphttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignuphttpService = TestBed.get(SignuphttpService);
    expect(service).toBeTruthy();
  });
});
