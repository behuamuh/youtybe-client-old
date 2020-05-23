import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthGuard } from './guardes/auth.guard';
import { DetailsPageComponent } from './components/details-page/details-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
