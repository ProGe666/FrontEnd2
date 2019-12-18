import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';
import {CurrencyService} from '../shared/services/currency.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // ViewEncapsulation :default is emulated
  encapsulation: ViewEncapsulation.ShadowDom // None and ShodowDom
})

// life cycle hook methods
export class ProductsComponent implements OnInit {
  min: number;
  max: number;
  products: Product[];

  // ps;
  // //one purpose in component is to do DI
  // constructor(ps: ProductsService) {
  //   this.ps = ps;
  // }

  constructor(
    private ps: ProductsService,
    private  cs: CurrencyService
  ) {}

  ngOnInit() {
    // this.products = this.ps.getProducts();

    // this.ps.getProducts()
    //   .then((products: Product[]) => {
    //     this.products = products;
    //   })
    //   .catch();

    this.ps.getProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        () => {},
        () => {
          console.log('Finished error and complete');
        });

  }
// addProduct(){
  /*this.product.push{
  {name:'iphone4', brand:'Apple',price:400,stock:22,image:'https://s3.us'}
  }
   */
    // this.product={
    //  ...this.products,
    // // tslint:disable-next-line:label-position
    // {name:'iphone4', brand:'Apple',price:400,stock:22,image:'https://s3.us'}
    // }
updateCurrencyCode(e) {
  this.cs.currencyCode = e.target.value;
}

}
