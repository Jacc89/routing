import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPagesComponent } from './Pages/login-pages/login-pages.component';
import { NotFoundPagesComponent } from './Pages/not-found-pages/not-found-pages.component';
import { HomePagesComponent } from './Pages/home-pages/home-pages.component';
import { ContactsPagesComponent } from './Pages/contacts-pages/contacts-pages.component';
import { ContactDetailPagesComponent } from './Pages/contact-detail-pages/contact-detail-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPagesComponent,
    NotFoundPagesComponent,
    HomePagesComponent,
    ContactsPagesComponent,
    ContactDetailPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
