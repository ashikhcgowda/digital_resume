import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { EducationComponent } from './component/education/education.component';
import { ProjectsComponent } from './component/projects/projects.component';
//import { NgxOrgChartModule } from 'ngx-org-chart';
import { SkillsComponent } from './component/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ContactComponent } from './component/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { OrganizationComponent } from './component/organization/organization.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutComponent } from './component/about/about.component';
import { LoginDialogAlertComponent } from './component/login-dialog-alert/login-dialog-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    LoginComponent,
    OrganizationComponent,
    DashboardComponent,
    AboutComponent,
    LoginDialogAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    //NgxOrgChartModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
