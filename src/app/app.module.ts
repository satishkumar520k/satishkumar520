import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AppsComponent } from './apps/apps.component';
import { VehiclesummaryComponent } from './vehiclesummary/vehiclesummary.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RupeePipe } from './rupee.pipe';
import { CurrencyPipe } from './currency.pipe';
import { AboutUsModule } from './about-us/about-us.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingoneComponent } from './siblingone/siblingone.component';
import { SiblingtwoComponent } from './siblingtwo/siblingtwo.component';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SheetComponent } from './sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InterpolationComponent,
    EventbindingComponent,
    AppsComponent,
    VehiclesummaryComponent,
    AccountsComponent,
    ProductsComponent,
    CreatevehicleComponent,
    CreateaccountComponent,
    AllemployeesComponent,
    CreateemployeeComponent,
    EmployeedetailsComponent,
    RupeePipe,
    CurrencyPipe,
    ParentComponent,
    ChildComponent,
    SiblingoneComponent,
    SiblingtwoComponent,
    ProductsummaryComponent,
    ProductdetailComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    AboutUsModule
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
