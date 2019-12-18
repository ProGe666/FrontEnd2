import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorRedAlertHello]'
})
export class ColorRedAlertHelloDirective {

  constructor() { }

  @HostBinding('style.color') color = 'red';
  @HostListener('click', ['$event'])
  onclick($event) {
    alert('hello' + $event.target.outerHTML);
  }

}
