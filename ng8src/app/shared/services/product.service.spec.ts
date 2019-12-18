import { TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProductsService} from './products.service';
import {Product} from '../models/product';


describe('ProductsService', () => {
  let httpClientSpy;
  let myProductsService: ProductsService;
  // tslint:disable-next-line:variable-name
  const expected_products: Product[] = [
    {id: 1, name: 'test1', brand: 'apple', price: 100, stock: 100, image: ''},
    {id: 2, name: 'test2', brand: 'google', price: 200, stock: 100, image: ''},
    {id: 3, name: 'test3', brand: 'amazon', price: 300, stock: 100, image: ''}
  ];




  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [
       HttpClientModule
     ],
     providers: [
       HttpClient
     ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    myProductsService = new ProductsService(httpClientSpy);
  });
  it('should be created', () => {
    expect(myProductsService).toBeTruthy();
  });
  it('should get products', (done) => {
    httpClientSpy.get.and.returnValue(expected_products);
    myProductsService.getProducts()
      .subscribe(products => {
        expect(products).toEqual(expected_products);
        done();
      });
  });
});
