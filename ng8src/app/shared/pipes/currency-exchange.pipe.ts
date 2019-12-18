import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: ''
})
export class CurrencyExchangePipe implements PipeTransform{
  RATES = {
    USD: 1,
    CNY: 7.04,
    JPY: 108.52
  }
  transform(value: number, currencyCode: string): number {
  return value * this.RATES[currencyCode];
}
}
