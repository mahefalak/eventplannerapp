import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormalPartiesComponent } from './formal-parties/formal-parties.component';
import { WeddingPartiesComponent } from './wedding-parties/wedding-parties.component';
import { BirthdayPartiesComponent } from './birthday-parties/birthday-parties.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { EventRequestsComponent } from './event-requests/event-requests.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { UploadPortfolioComponent } from './upload-portfolio/upload-portfolio.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'team',component:TeamComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'events',component:EventsComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'formal-parties',component:FormalPartiesComponent},
  {path:'wedding-parties',component:WeddingPartiesComponent},
  {path:'birthday-parties',component:BirthdayPartiesComponent},

  {path:'my-profile',component:MyProfileComponent},
  {path:'event-requests',component:EventRequestsComponent},
  {path:'new-request',component:NewRequestComponent},
  {path:'register-users',component:RegisterUsersComponent},
  {path:'login',component:LoginComponent},
  {path:'upload-portfolio',component:UploadPortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
