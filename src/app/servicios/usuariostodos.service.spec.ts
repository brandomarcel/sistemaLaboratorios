import { TestBed } from '@angular/core/testing';

import { UsuariostodosService } from './usuariostodos.service';

describe('UsuariostodosService', () => {
  let service: UsuariostodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariostodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
