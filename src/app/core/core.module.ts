import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { CardPrimaryComponent } from '../core/components/card-primary/card-primary.component';
import { CardSecondaryComponent } from '../core/components/card-secondary/card-secondary.component';
import { TablePrimaryComponent } from '../core/components/table-primary/table-primary.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        CardPrimaryComponent,
        SidebarComponent,
        CardSecondaryComponent,
        TablePrimaryComponent,
    ],
    exports: [
        CardPrimaryComponent,
        CardSecondaryComponent,
        SidebarComponent,
        TablePrimaryComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        })
    ]
})
export class CoreModule { }