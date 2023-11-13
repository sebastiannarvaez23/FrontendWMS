import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="contain-app">
    <app-sidebar>
        <app-picking></app-picking>
    </app-sidebar>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'warehouse-anywhere-ft';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    const lang = this.translate.getBrowserLang();
    if (lang !== 'en' && lang !== 'es') {
      this.translate.setDefaultLang('en');
    } else {
      this.translate.setDefaultLang(lang);
    }
  }
}
