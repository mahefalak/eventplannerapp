import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { BirthdayPartiesComponent } from './birthday-parties/birthday-parties.component';
import { WeddingPartiesComponent } from './wedding-parties/wedding-parties.component';
import { FormalPartiesComponent } from './formal-parties/formal-parties.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { EventRequestsComponent } from './event-requests/event-requests.component';
import { UploadPortfolioComponent } from './upload-portfolio/upload-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    EventsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    BirthdayPartiesComponent,
    WeddingPartiesComponent,
    FormalPartiesComponent,
    LoginComponent,
    RegisterComponent,
    MyProfileComponent,
    RegisterUsersComponent,
    NewRequestComponent,
    EventRequestsComponent,
    UploadPortfolioComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
