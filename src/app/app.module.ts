import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopnavComponent } from './topnav/topnav.component';
import {ServiceService} from './service/service.service';
import { AuthGuard } from './service/authguard';
import {HttpClientModule} from '@angular/common/http';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { NewapplicantComponent } from './newapplicant/newapplicant.component';
import { AddjobComponent } from './addjob/addjob.component';
import { CvComponent } from './cv/cv.component';
import { CertComponent } from './cert/cert.component';
import { PhotoimageComponent } from './photoimage/photoimage.component';

@NgModule({
  declarations: [
    AppComponent,
    routeComponent,
    TopnavComponent,
    AdminnavComponent,
    NewapplicantComponent,
    AddjobComponent,
    CvComponent,
    CertComponent,
    PhotoimageComponent,
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
