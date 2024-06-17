import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent},
  { path: "aboutus", component:AboutUsComponent },
  { path: "admin", component:AdminComponent},
  { path: "assessments", component:AssessmentsComponent},
  { path: "contactus", component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
