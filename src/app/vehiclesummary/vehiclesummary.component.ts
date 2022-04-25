import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
// import { subscribeOn } from 'rxjs';
// import { error } from 'console';
// import { Observable, subscribeOn } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehiclesummary',
  templateUrl: './vehiclesummary.component.html',
  styleUrls: ['./vehiclesummary.component.css']
})
export class VehiclesummaryComponent implements OnInit {

  c:Vehicle[]=<Vehicle[]>[];  
  filterTerm ="";
  filter()
  {
      this.cService.getfilteredVehicles(this.filterTerm).subscribe(
        (data:Vehicle[])=>{
          this.c=data;
        },
        (error:any)=>{
        
          alert("inernal server error")
        }
        )
  }
  column =" ";
  order =" ";
  sort()
  {
      this.cService.getsortedVehicles(this.column,this.order).subscribe(
        (data:Vehicle[])=>{
          this.c=data;
        },
        (error:any)=>{
        
          alert("inernal server error")
        }
        )
  }

  page1=" ";
  limit=" ";
  page()
  {
    this.cService.getpagedVehicles(this.page1,this.limit).subscribe(
      (data:Vehicle[])=>{
        this.c=data;

      },
      (error:any)=>{
      alert("internal server error")
      }
    )
  }
  constructor(private cService:VehicleService,private router:Router) 
  {
      cService.getVehicle().subscribe(
      
          (data:Vehicle[])=>
          {
               this.c=data; 
          },
          (error:any)=>
          {
                alert("Internal server error")
          }
      )
  }
  
   

  // id=" ";
  delete(Vehicleid:any)
  {
    this.cService.deleteVehicle(Vehicleid).subscribe(
      (data:any)=>
      {
        this.c=data;
      },
      (error:any)=>

      {
        alert("internal server error")
      }
    )
    
  }
  view(id:string)
  {

    this.router.navigateByUrl("/dashboard/employeedetails"+"/"+id)
  }
  ngOnInit(): void {
  }
}
