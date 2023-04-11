import { TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorServiceService } from './basic-auth-htpp-interceptor-service.service';

describe('BasicAuthHtppInterceptorServiceService', () => {
  let service: BasicAuthHtppInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHtppInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
