import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PickingComponent } from './pages/picking/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { SaleorderSearchComponent } from './components/saleorder-search/saleorder-search.component';
import { SaleorderInfoComponent } from './components/saleorder-info/saleorder-info.component';
import { PickingListComponent } from './components/picking-list/picking-list.component';
import { BoxComponent } from './pages/box/box.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        PickingComponent,
        IndicatorComponent,
        SaleorderSearchComponent,
        SaleorderInfoComponent,
        PickingListComponent,
        BoxComponent,
    ],
    exports: [
        PickingComponent,
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        SharedModule,
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
export class PickingModule { }