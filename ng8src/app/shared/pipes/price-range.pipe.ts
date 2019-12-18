import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'priceRange',
  pure: false
})
export class PriceRangePipe implements PipeTransform {
transform(products: Product[], min: number, max: number): Product[] {
  // informal, not in good practice
  min = min || Number.MIN_VALUE;
  max = max || Number.MAX_VALUE;
  return products.filter((p: Product) => {
    return p.price >= min && p.price <= max;
  });
}
}
