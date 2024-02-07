import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickingComponent } from './picking/pages/picking/main-page.component';

const routes: Routes = [
  {
    path: 'pickings',
    component: PickingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
