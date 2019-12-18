import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appMyIf]'
})

export class MyIfDirective {

  constructor(
    private vr: ViewContainerRef,
    private  tr: TemplateRef<any>
  ) {}

  @Input() // ES6 setter
  set appMyIf(flag) {
    flag ? this.vr.createEmbeddedView(this.tr) : this.vr.clear();
  }

}
