import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { SidebarContentComponent } from './content/sidebar-content/sidebar-content.component';
import { DoctorContentComponent } from './content/main-content/doctor-content/doctor-content.component';
import { DoctorListComponent } from './content/main-content/doctor-content/doctor-list/doctor-list.component';
import { DoctorItemComponent } from './content/main-content/doctor-content/doctor-list/doctor-item/doctor-item.component';
import { FooterComponent } from './footer/footer.component';

import { DoctorService } from './content/main-content/doctor-content/doctor-list/doctor-service';
import { LocationService } from './content/main-content/doctor-content/doctor-list/location-service';
import { SideBarService } from './content/sidebar-content/sidebar-service';
import { MedicalRssFeedService } from './content/main-content/medical-rss-feed/medical-rss-feed-service';

import { RouterModule, Routes } from '@angular/router';
import { MedicalRssFeedComponent } from './content/main-content/medical-rss-feed/medical-rss-feed.component';
import { SidebarNewsContentComponent } from './content/sidebar-content/sidebar-news-content/sidebar-news-content.component';
import { SidebarDoctorsContentComponent } from './content/sidebar-content/sidebar-doctors-content/sidebar-doctors-content.component';

const appRoutes: Routes = [
  { path: 'doctors/:specializationid/:specialization', component: DoctorListComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'news', component: MedicalRssFeedComponent },
  { path: '', component: MedicalRssFeedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    BannerComponent,
    ContentComponent,
    MainContentComponent,
    SidebarContentComponent,
    DoctorContentComponent,
    DoctorListComponent,
    DoctorItemComponent,
    FooterComponent,
    MedicalRssFeedComponent,
    SidebarNewsContentComponent,
    SidebarDoctorsContentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DoctorService, SideBarService, LocationService, MedicalRssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
