import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found/page-not-found.component';
import { RatingComponent } from './components/rating/rating.component';
import { FeedbackStatusComponent } from './components/status/feedback-status/feedback-status.component';
import { AuthguardService } from './guards/authguard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    canActivate: [AuthguardService],
    children: [
      {
        path: 'students',
        component: FeedbackStatusComponent,
      },
      {
        path: 'form',
        component: FeedbackFormComponent
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }