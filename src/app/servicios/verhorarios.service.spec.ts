import { TestBed } from '@angular/core/testing';

import { VerhorariosService } from './verhorarios.service';

describe('VerhorariosService', () => {
  let service: VerhorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerhorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
