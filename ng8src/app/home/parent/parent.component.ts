import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

/*
LifeCycle - component/directive HookMethod
        constructor //directive only have 1-4
        ngOnInit - data initialization
        ngOnDestroy - before component will be destroyed.e.g. navigate away.
        ngOnChanges - will be invoked whenever input data binding changes(pure change)
        ngDoCheck - invoked when parent change detector runs
        // for component only
        ngAfterViewInit - invoked after child/DOM components ready
        ngAfterViewChecked
        ngAfterContentInit - invoked after contents passed from parents done initialization
        ngAfterContentChecked
*/

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
    parentData: string;

    @ViewChild(ChildComponent, {static: false}) childComponent;
  // if want to use childcomponent in ngOnInit, let static: true
    @ViewChild('h2', {static: true}) h2;

    // @ContentChild
  constructor() { }

  ngOnInit() {
    console.log(this.childComponent, this.h2);

  }
setData($event) {
    this.parentData = $event;
}
}
