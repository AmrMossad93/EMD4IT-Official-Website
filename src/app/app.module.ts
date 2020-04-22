import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { PreloaderComponent } from './LayOut/preloader/preloader.component';
import { NavBarComponent } from './LayOut/nav-bar/nav-bar.component';
import { FooterComponent } from './LayOut/footer/footer.component';
import { TeamPageComponent } from './Pages/team-page/team-page.component';
import { ContactUsPageComponent } from './Pages/contact-us-page/contact-us-page.component';
import { ProjectsComponent } from './Pages/projects-page/projects.component';
import { ProjectDetailsComponent } from './Pages/projects-page/project-details/project-details.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { ProfileCardComponent } from './Widgets/profile-card/profile-card.component';
import { ProfileBackLastCardComponent } from './Widgets/profile-back-last-card/profile-back-last-card.component';
import { ServiceCardComponent } from './Widgets/service-card/service-card.component';
import { ProjectCardComponent } from './Widgets/project-card/project-card.component';
import { FAQPageComponent } from './Pages/f-a-q-page/f-a-q-page.component';
import { TeamCardComponent } from './Widgets/team-card/team-card.component';
import { BreakingNewsComponent } from './LayOut/breaking-news/breaking-news.component';
import { ProjectBlogComponent } from './Widgets/project-blog/project-blog.component';
import { InstagramFeedsComponent } from './Components/instagram-feeds/instagram-feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    PreloaderComponent,
    NavBarComponent,
    FooterComponent,
    TeamPageComponent,
    ContactUsPageComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ServicesPageComponent,
    ProfileCardComponent,
    ProfileBackLastCardComponent,
    ServiceCardComponent,
    ProjectCardComponent,
    FAQPageComponent,
    TeamCardComponent,
    BreakingNewsComponent,
    ProjectBlogComponent,
    InstagramFeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
