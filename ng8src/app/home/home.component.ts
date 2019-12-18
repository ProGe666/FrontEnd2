import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
​
export class HomeComponent implements OnInit {
  // product = {
  //   name: 'iPhone6',
  //   brand: 'Apple',
  //   price: 900,
  //   stock: 111,
  //   image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'
  // };

  product: Product;
  // tslint:disable-next-line:ban-types
  myClass: String;
  flag: boolean;

  constructor(private ps: ProductsService) {}
  ngOnInit() {
    // this.product = this.ps.getProduct(5);
    // this.ps.getProduct()
  // observale islavzy,if you don't subscribe, it will not excute
this.ps.getProduct(5)
    .subscribe(p => this.product = p);
  }
}
