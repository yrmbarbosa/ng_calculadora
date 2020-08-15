import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 4, CalculadoraService.opSoma);
      expect(resultado).toEqual(5);
    })
  );

  it('deve garantir que 1 - 1 = 0',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 1, CalculadoraService.opSubtracao);
      expect(resultado).toEqual(0);
    })
  );
  
  it('deve garantir que 8 / 2 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(8, 2, CalculadoraService.opDivisao);
      expect(resultado).toEqual(4);
    })
  );
  
  it('deve garantir que 3 * 3 = 9',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(3, 3, CalculadoraService.opMultiplicacao);
    expect(resultado).toEqual(9);
    })
  );

  it('deve retornar 0 para operacao invalida',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(3, 3, "?");
    expect(resultado).toEqual(0);
    })
  );

});
