import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'dashbord', component: DashbordComponent},
{path: 'login', component: LoginComponent},
{path: 'table', component: TableComponent},
{path: 'courses', component: CoursesComponent},
{path: 'students', component: StudentsComponent},
{path: 'trainers', component: TrainersComponent},
{path: 'profile', component: ProfileComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: '**', redirectTo: '/login', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
