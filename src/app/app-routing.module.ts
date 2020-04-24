import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {AboutUsComponent} from './Pages/about-us/about-us.component';
import {TeamPageComponent} from './Pages/team-page/team-page.component';
import {ContactUsPageComponent} from './Pages/contact-us-page/contact-us-page.component';
import {ProjectsComponent} from './Pages/projects-page/projects.component';
import {ProjectDetailsComponent} from './Pages/projects-page/project-details/project-details.component';
import {ServicesPageComponent} from './Pages/services-page/services-page.component';
import {FAQPageComponent} from './Pages/f-a-q-page/f-a-q-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'contact-us', component: ContactUsPageComponent},
  {path: 'f-a-q', component: FAQPageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectDetailsComponent},
  {path: 'services', component: ServicesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
