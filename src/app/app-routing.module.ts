import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DptComponent } from './dpt/dpt.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdshComponent } from './userdsh/userdsh.component';
import {AuthGuard} from './service/authguard';
import {TopnavComponent} from './topnav/topnav.component';
import {AdminnavComponent} from './adminnav/adminnav.component';
import {NewapplicantComponent} from './newapplicant/newapplicant.component';
import { AddjobComponent } from './addjob/addjob.component';
import {LandingComponent} from './landing/landing.component';
import { CppliedComponent } from './cpplied/cpplied.component'





const routes: Routes = [
  {path:'', component: LandingComponent},
  //{path: '', component: DptComponent},
  {path:'user', component: TopnavComponent,
  children:[
    {path:'applyhere', component:UserdshComponent}
  ]
},

  {path:'eclhradmin', component: LoginComponent},
  {path: '', component: AdminnavComponent,
   canActivateChild: [AuthGuard],
    children:[
      {path: 'adminuser@ecl', component: NewapplicantComponent},
      {path:'profile', component: ProfileComponent},
      {path:'addjob',  component:AddjobComponent },
      {path:'capplied', component: CppliedComponent}
                 
    ]
},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [LandingComponent,DptComponent, LoginComponent,TopnavComponent, AdminnavComponent,
    ProfileComponent, UserdshComponent, NewapplicantComponent, AddjobComponent, CppliedComponent
   ]
