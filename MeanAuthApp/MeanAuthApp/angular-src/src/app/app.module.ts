import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { SafetyComponent } from './components/safety/safety.component';
import { KiwiaccessComponent } from './components/kiwiaccess/kiwiaccess.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminlocationsComponent } from './components/adminlocations/adminlocations.component';
import { AdminuserlistComponent } from './components/adminuserlist/adminuserlist.component';
import { QnaComponent } from './components/qna/qna.component';
import { QnawriteComponent } from './components/qnawrite/qnawrite.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ProvacypolicyComponent } from './components/provacypolicy/provacypolicy.component';
import { FooterbarComponent } from './components/footerbar/footerbar.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'admin', component: AdminComponent, canActivate:[AuthGuard]},
  {path:'aboutus', component: AboutusComponent},
  {path:'locations', component: LocationsComponent},
  {path:'programs', component: ProgramsComponent},
  {path:'safety', component: SafetyComponent},
  {path:'kiwiaccess', component: KiwiaccessComponent},
  {path:'adminlogin', component: AdminloginComponent},
  {path:'adminlocations', component: AdminlocationsComponent},
  {path:'adminuserlist', component: AdminuserlistComponent},
  {path:'qna', component: QnaComponent},
  {path:'qnawrite', component: QnawriteComponent},
  {path:'adminprofile', component: AdminprofileComponent},
  {path:'privacypolicy', component: ProvacypolicyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AdminComponent,
    AboutusComponent,
    LocationsComponent,
    ProgramsComponent,
    SafetyComponent,
    KiwiaccessComponent,
    AdminloginComponent,
    AdminlocationsComponent,
    AdminuserlistComponent,
    QnaComponent,
    QnawriteComponent,
    FooterComponent,
    AdminprofileComponent,
    ProvacypolicyComponent,
    FooterbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBZ0KLKBKLSJ2MMVcWIIZ2dTiYRBWarFcE'})
  ],
  providers: [ValidateService, AuthService, AuthGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
