import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { CardSecondaryComponent } from './components/card-secondary/card-secondary.component';
import { TablePrimaryComponent } from './components/table-primary/table-primary.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BlurLayerComponent } from './components/blur-layer/blur-layer.component';
import { ModalPrimaryComponent } from './components/modal-primary/modal-primary.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        CardPrimaryComponent,
        SidebarComponent,
        CardSecondaryComponent,
        TablePrimaryComponent,
        BlurLayerComponent,
        ModalPrimaryComponent,
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
export class SharedModule { }