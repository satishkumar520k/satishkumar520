import { Component, OnInit } from '@angular/core';
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

  c:any=[];  
  filterTerm ="";
  filter()
  {
      this.cService.getfilteredVehicles(this.filterTerm).subscribe(
        (data:any)=>{
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
        (data:any)=>{
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
      (data:any)=>{
        this.c=data;

      },
      (error:any)=>{
      alert("internal server error")
      }
    )
  }
  constructor(private cService:VehicleService) 
  {
      cService.getVehicle().subscribe(
      
          (data:any)=>
          {
               this.c=data; 
          },
          (error:any)=>
          {
                alert("Internal server error")
          }
      )
  }
  ngOnInit(): void {
  }
}
