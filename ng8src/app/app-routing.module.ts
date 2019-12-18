import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'prime',
    canLoad: [AuthGuard],
    // before angular8, if you want to lazy loading a module
    // loadChildren: './prime/prime.module#PrimeModule'
    // Angular 8 lazy loading syntax
    loadChildren: () => import( './prime/prime.module').then( m => m.PrimeModule)
  },
  {
    // ** match anything,always put this in the end
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  // one application should only have one forRoot
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


