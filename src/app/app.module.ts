import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourseenrollComponent } from './courseenroll/courseenroll.component';
import { CourseService } from './courseservice.service';
import { ProfileService } from './profileservice.service';
import { UserService } from './userservice.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { LoginComponent } from './login/login.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { VerifyappComponent } from './verifyapp/verifyapp.component';
import { NewnotificationComponent } from './newnotification/newnotification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    AddcourseComponent,
    CourseenrollComponent,
    LoginComponent,
    ViewapplicationComponent,
    VerifyappComponent,
    NewnotificationComponent,
    NotificationsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,CourseService,ProfileService,UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
