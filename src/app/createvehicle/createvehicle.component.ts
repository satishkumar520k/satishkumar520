import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {

  vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl()
    

});

submit()
{
  console.log(this.vehicleForm);
  console.log(this.vehicleForm.value);
  this.vehicleService.postvehicle(this.vehicleForm.value).subscribe(
    // (data:any)=>{
    //   this.vehicleService=data;
    // },
    (data:any)=>{
      alert("Success")
    },
    (error:any)=>{

      alert("failure")
    }
    )

  
}

  constructor(private vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

}
