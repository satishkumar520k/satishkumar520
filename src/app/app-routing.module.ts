import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsService } from './accounts.service';
import { AccountsComponent } from './accounts/accounts.component';
import { AppsComponent } from './apps/apps.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';


const routes: Routes = [{path:"logout",component:LoginComponent},
{path:"dashboard",component:DashboardComponent,children:[{
  path:"interpolation",component:InterpolationComponent},
  {path:"eventbinding",component:EventbindingComponent},
  {path:"apps",component:AppsComponent},
  {path:"vehiclesummary",component:VehiclesummaryComponent},
  {path:"home",component:HomeComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"products",component:ProductsComponent},
  {path:"createvehicle",component:CreatevehicleComponent},
  {path:"createaccount",component:CreateaccountComponent},
  {path:"",component:HomeComponent},
  
]},
{path:"",component:LoginComponent},
{path:"**",component:PagenotfoundComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
