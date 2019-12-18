import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  // introduced in Angular6, equivalent to adding it to providers array
  providedIn: 'root'
})

export class ProductsService {
  products: Product[] = [
    { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
    { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'},
    { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'},
    { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'},
    { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'},
    { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'},
    { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'},
    { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg'},
    { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'}
  ];

  constructor(
    private httpClient: HttpClient
  ) {}

  // getProducts(): Promise<Product[]>{
  //   // return this.products;
  //   return this.httpClient.get<Product[]>(`${environment.API_URL}/products`).toPromise();
  // }
  getProducts(): Observable<Product[]>{
    // return this.products;
    return this.httpClient.get<Product[]>(`${environment.API_URL}/products`)
    .pipe(map((data: Product[]) => {
      return data.map((p: Product) => {
        p.price *= 0.3;
        return p;

      })
    }));
  }

  // getProduct(name): Product{
  //   return this.products.find(p => p.name === name);
  // }

  getProduct(id: number): Observable<Product> {
    // return this.products[id];
    return this.httpClient.get<Product>(`${environment.API_URL}/products/${id}`);
  }

  // getProduct(id: number): Promise<Product>{
  //   // return this.products[id];
  //   return this.httpClient.get<Product>(`${environment.API_URL}/products/${id}`).toPromise();
  // }
}
