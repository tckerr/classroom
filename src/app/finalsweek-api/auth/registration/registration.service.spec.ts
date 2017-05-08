import { TestBed, inject } from '@angular/core/testing';

import { RegistrationService } from './register.service';

describe('RegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationService]
    });
  });

  it('should ...', inject([RegistrationService], (service: RegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
