import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-articles></my-articles>
  `
})
export class AppComponent {
  title = 'Algorithms';
}
