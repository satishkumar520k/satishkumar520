import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit 
{
 
  employees:any=[ ];
  // employee:any=[ ];

  view(id:any)
  {
    this.router.navigateByUrl("/dashboard/editemployeedetails"+"/"+id)
  }
  edit(id:any)
  {
  this.router.navigateByUrl("/dashboard/editemployeedetails"+"/"+id)
  }

  constructor(private employeeService:EmployeeService, private router:Router,private activatedRoute:ActivatedRoute) 
  
  {
    
      // this.activatedRoute.params.subscribe
      // (
      //   (data:any)=>
      //   {
      //     console.log(data);
      //     this.employeeService.getemploy(data.id).subscribe
      //     (
      //       (data:any)=>
      //       {
      //         this.employee=data;  
      //       }
      //     )
      //   },
      //   (error:any)=>
      //   {
      //    alert(" error")
      //   }
      // )   
      
      this.employeeService.getemployees().subscribe(
        (data:any)=>
        {
          this.employees=data;

        },
        (error:any)=>
        {
          alert("internal server error")
        }
        )
      
  }

  ngOnInit(): void {
  }

}
