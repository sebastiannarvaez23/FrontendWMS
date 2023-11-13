import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="contain-app">
    <app-sidebar >
      <app-picking></app-picking>
    </app-sidebar>
  </div> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warehouse-anywhere-ft';
}
