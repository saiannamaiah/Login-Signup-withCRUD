import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component:EmpAddEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
