import { Component } from '@angular/core';

// decorator: decorator pattern
// the component part is to decorate the class
@Component({
  // metadata
  selector: 'app-root', // element selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8demo';
  link = 'https://www.google.com';

  onClick = () => {
    this.title = 'new title';
  }

  updateTitle = ($event) => {
    this.title =$event.target.value ;
  }
}
