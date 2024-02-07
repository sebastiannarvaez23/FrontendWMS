import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PickingComponent } from "./pages/picking/main-page.component";

const routes: Routes = [
    {
        path: 'picking',
        component: PickingComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PickingRoutingModule { }