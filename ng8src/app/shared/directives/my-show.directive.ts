import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appMyShow]'
})

export class MyShowDirective implements OnChanges{
  // display: none / block, flex...
  @Input() show: boolean;

  constructor(private er: ElementRef) {}

  // this life cycle hook method will be called when your @Input variable changed
  ngOnChanges() {
    // console.log(this.er);
    this.er.nativeElement.style.display = this.show ? '' : 'none';
  }
}
