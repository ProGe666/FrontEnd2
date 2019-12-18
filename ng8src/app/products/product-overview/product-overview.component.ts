import {Component, Input} from '@angular/core';
import {CurrencyService} from '../../shared/services/currency.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})

export class ProductOverviewComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('prod') product;
  constructor(
    public cs: CurrencyService) {}
}

