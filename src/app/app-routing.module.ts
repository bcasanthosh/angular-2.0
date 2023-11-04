import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramComponent } from './instagram/instagram.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: InstagramComponent },
  
  { path: 'about', component: SigninComponent },
  
  { path: 'contact', component: SignupComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
