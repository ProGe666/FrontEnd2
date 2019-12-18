import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponent } from './prime.component';
import { PrimeMusicComponent } from './prime-music/prime-music.component';
import { PrimeVideoComponent } from './prime-video/prime-video.component';
import {Routes} from '@angular/router';

const routes: Routes = {
  path: '',
  component: PrimeComponent,
  children: [
    {
      path: 'music',
      component: PrimeMusicComponent
    },
    {
      path: 'video',
      component: PrimeVideoComponent
    }
  ]
};

@NgModule({
  declarations: [PrimeComponent, PrimeMusicComponent, PrimeVideoComponent],
  imports: [
    CommonModule,
    RoutesChildrenModule
  ]
})
export class PrimeModule { }
