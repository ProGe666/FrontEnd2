import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/models/product';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private ar: ActivatedRoute,
    private ps: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // const id = this.ar.snapshot.params.id;
    this.ar.paramMap
      .pipe(switchMap(params => {
        const id = +params.get('id');
        return this.ps.getProduct(id);
      }))
      .subscribe(p => {
        this.product = p;
      });
      //
      // .subscribe(params => {
      //   const id = +params.get('id');
      //   this.ps.getProduct(id)
      //     .subscribe((p: Product) => this.product = p);
      // });
    // this.ps.getProduct(id)
    //   .then((p: Product) => this.product = p)
    //   .catch();

    // this.ps.getProduct(id)
    //   .subscribe((p: Product) => this.product = p);
  }

    goToNext() {
      let id = this.ar.snapshot.params.id;
      this.router.navigate(['/product-detail', ++id]).catch();
    }
}
