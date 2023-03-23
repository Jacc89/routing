import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './Pages/home-pages/home-pages.component';
import { LoginPagesComponent } from './Pages/login-pages/login-pages.component';
import { ContactsPagesComponent } from './Pages/contacts-pages/contacts-pages.component';
import { ContactDetailPagesComponent } from './Pages/contact-detail-pages/contact-detail-pages.component';
import { NotFoundPagesComponent } from './Pages/not-found-pages/not-found-pages.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  },
  {
    path: 'home', 
    component: HomePagesComponent,
    children:[
      {
        path: 'hijo',
        component: HomePagesComponent
      }
    ]
  },
  {
    path: 'login', 
    component: LoginPagesComponent
  },
  {
    path: 'contacts', 
    component: ContactsPagesComponent
  },
  {
    path: 'contacts/:id', 
    component: ContactDetailPagesComponent
  },
  {
    path: '**',
    component: NotFoundPagesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
