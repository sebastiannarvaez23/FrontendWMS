import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { PickingComponent } from './components/pages/picking/picking.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { CardPrimaryComponent } from './shared/card-primary/card-primary.component';
import { CardSecondaryComponent } from './shared/card-secondary/card-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PickingComponent,
    LoginComponent,
    SignupComponent,
    CardPrimaryComponent,
    CardSecondaryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
