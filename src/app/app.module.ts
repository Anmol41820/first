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
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
