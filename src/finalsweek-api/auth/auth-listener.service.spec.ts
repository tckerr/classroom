import { TestBed, inject } from '@angular/core/testing';

import { AuthListenerService } from './auth-listener.service';

describe('AuthListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthListenerService]
    });
  });

  it('should ...', inject([AuthListenerService], (service: AuthListenerService) => {
    expect(service).toBeTruthy();
  }));
});
