import { TestBed } from '@angular/core/testing';

import { TipolaboratorioService } from './tipolaboratorio.service';

describe('TipolaboratorioService', () => {
  let service: TipolaboratorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipolaboratorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
