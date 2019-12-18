import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ProductsComponent} from './products/products.component';
import {ProductOverviewComponent} from './products/product-overview/product-overview.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {MyShowDirective} from './shared/directives/my-show.directive';
import {MyIfDirective} from './shared/directives/my-if.directive';
import { ColorRedAlertHelloDirective } from './shared/directives/color-red-alert-hello.directive';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PriceRangePipe} from './shared/pipes/price-range.pipe';
import {CurrencyExchangePipe} from './shared/pipes/currency-exchange.pipe';
import {CurrencyService} from './shared/services/currency.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import { ParentComponent } from './home/parent/parent.component';
import { ChildComponent } from './home/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductOverviewComponent,
    HomeComponent,
    HeaderComponent,
    MyShowDirective,
    MyIfDirective,
    ColorRedAlertHelloDirective,
    ProductDetailComponent,
    PriceRangePipe,
    CurrencyExchangePipe,
    LoginComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // if you want form support, import this one
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    // angularjs http service, angular 2, 4 HTTPModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
