import { Injectable } from '@angular/core';
import { CalculadoraModule } from '../calculadora.module';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly opSoma: string = "+";
  static readonly opSubtracao: string = "-";
  static readonly opDivisao: string = "/";
  static readonly opMultiplicacao: string = "*";

  constructor() { }

  calcular(numero1: number, numero2: number, operacao: string): number {

    let resultado: number;

    switch (operacao) {
      case CalculadoraService.opSoma:
        resultado = numero1 + numero2;
        break;
      case CalculadoraService.opSubtracao:
        resultado = numero1 - numero2;
        break;
      case CalculadoraService.opDivisao:
        if (numero2 == 0) 
        {
           resultado = 0; 
        }
        resultado = numero1 / numero2;
        break;
      case CalculadoraService.opMultiplicacao:
        resultado = numero1 * numero2;
        break;
      default:
        resultado = 0;
    }

    return resultado;

  }
}
