import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ConsultantManagementComponent } from './components/consultant-management/consultant-management.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultantComponent } from './components/consultant/consultant.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    ConsultantManagementComponent,
    ConsultantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
