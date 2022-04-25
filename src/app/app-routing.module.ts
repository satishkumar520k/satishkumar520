import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './about-us/aboutcompany/aboutcompany.component';
import { AccountsService } from './accounts.service';
import { AccountsComponent } from './accounts/accounts.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { AppsComponent } from './apps/apps.component';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './child/child.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { SheetComponent } from './sheet/sheet.component';
import { SiblingoneComponent } from './siblingone/siblingone.component';
import { SiblingtwoComponent } from './siblingtwo/siblingtwo.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';


const routes: Routes = [{path:"logout",component:LoginComponent},
{path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard], children:[{
  path:"interpolation",component:InterpolationComponent},
  {path:"eventbinding",component:EventbindingComponent},
  {path:"apps",component:AppsComponent},
  {path:"vehiclesummary",component:VehiclesummaryComponent},
  {path:"home",component:HomeComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"products",component:ProductsComponent},
  {path:"createvehicle",component:CreatevehicleComponent},
  {path:"createaccount",component:CreateaccountComponent},
  {path:"allemployees",component:AllemployeesComponent},
  {path:"createemployee",component:CreateemployeeComponent},
  {path:"employeedetails",component:EmployeedetailsComponent},
  {path:"editemployeedetails/:id",component:CreateemployeeComponent},
  {path:"aboutcompany",component:AboutcompanyComponent},
  {path:"contactus", loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"siblingone",component:SiblingoneComponent},
  {path:"siblingtwo",component:SiblingtwoComponent},
  {path:"productsummary",component:ProductsummaryComponent},
  {path:"productdetail",component:ProductdetailComponent},
  {path:"sheet",component:SheetComponent},

  {path:"",component:HomeComponent},
  
]},
{path:"",component:LoginComponent},
{path:"**",component:PagenotfoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
