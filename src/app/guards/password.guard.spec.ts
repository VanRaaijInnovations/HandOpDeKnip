import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { passwordGuard } from './password.guard';

describe('passwordGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => passwordGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
