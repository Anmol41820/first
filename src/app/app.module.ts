import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { AddAssessmentScoreComponent } from './components/add-assessment-score/add-assessment-score.component';
import { ViewAssessmentScoreComponent } from './components/view-assessment-score/view-assessment-score.component';
import { AddAssessmentComponent } from './components/add-assessment/add-assessment.component';
import { ViewAssessmentComponent } from './components/view-assessment/view-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    AssessmentsComponent,
    AdminComponent,
    ContactUsComponent,
    AddUserComponent,
    ViewUserComponent,
    ViewCourseComponent,
    AddCourseComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddAssessmentScoreComponent,
    ViewAssessmentScoreComponent,
    AddAssessmentComponent,
    ViewAssessmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
