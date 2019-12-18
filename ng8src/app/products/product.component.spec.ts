import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductsService} from '../shared/services/products.service';
import {CurrencyService} from '../shared/services/currency.service';
import {ProductOverviewComponent} from './product-overview/product-overview.component';
import { of } from 'rxjs';
import {CurrencyExchangePipe} from '../shared/pipes/currency-exchange.pipe';
import {ProductsComponent} from './products.component';
import { Product } from '../shared/models/product';
describe('ProductsComponent', () => {
  let myProductsComponent;
  /*class MockProductService {
    getProducts = of([new Product()]);
  }*/
  /*class MockCurrencyService {
    currencyCode: 'USD';
  }*/
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductOverviewComponent,
        CurrencyExchangePipe
      ],
      providers: [
        /*        ProductsComponent,*/
        // {provide: ProductsService, useClass: MockProductService},
        CurrencyService
      ]
    });
    // myProductsComponent = TestBed.get(ProductsComponent);
    const myProductsService = jasmine.createSpyObj('ProductsService', ['getProducts']);
    myProductsService.getProducts.and.returnValue(of([]));
    myProductsComponent = new ProductsComponent(myProductsService, new CurrencyService());
  });
  it('should be created', () => {
    expect(myProductsComponent).toBeTruthy();
  });
  it('addProduct() should add a product to products array', () => {
    // myProductsComponent.products = [];
    myProductsComponent.ngOnInit();
    myProductsComponent.addProduct();
    expect(myProductsComponent.products).toEqual([{
      name: 'iPhone4',
      brand: 'Apple',
      price: 400,
      stock: 22,
      image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'
    }]);
  });
});
