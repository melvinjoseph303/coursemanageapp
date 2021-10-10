import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourseenrollComponent } from './courseenroll/courseenroll.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { VerifyappComponent } from './verifyapp/verifyapp.component';
import { NewnotificationComponent } from './newnotification/newnotification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CoursesComponent } from './courses/courses.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
 
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    
  },
  {
    path: 'addcourse',
    canActivate: [AuthGuard],
    component: AddcourseComponent,
    
  },
  {
    path: 'courseenroll',
    component:CourseenrollComponent,
    
  },
  {
    path: 'viewapp',
    canActivate: [AuthGuard],
    component:ViewapplicationComponent,
    
  },
  {
    path:'update',
     canActivate: [AuthGuard],
    component:VerifyappComponent
  },
  {
    path:'addnotification',
     canActivate: [AuthGuard],
    component:NewnotificationComponent
  },
  {
    path:'viewnotification',
     canActivate: [AuthGuard],
    component:NotificationsComponent
  },
  {
    path: 'courses',
    component:CoursesComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
