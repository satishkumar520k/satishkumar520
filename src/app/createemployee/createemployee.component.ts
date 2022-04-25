import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit 
{

  employeeForm: FormGroup= new FormGroup
  (
    {
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    mobile: new FormControl(),
    email: new FormControl(),
    id: new FormControl(),
    dob:new FormControl(),
    address: new FormGroup
    (
      {
      adressline: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),

      }
    ),   
    education: new FormArray
    (
      [ ]
    ),
    role: new FormControl()
    }
  )

  submit()
    
    {
      if(this.employee)
      {
        this.employeeService.editemployee(this.employeeForm.value).subscribe(
          (data:any)=>
          {
            alert("success")
          },
          (error:any)=>
          {
            alert("error")
          }
        )
      }
    
      else
      {
        console.log(this.employeeForm);
        console.log(this.employeeForm.value);
        this.employeeService.postemployee(this.employeeForm.value).subscribe
        (
          (data:any)=>
          {
            alert("success");
          },
          (error:any)=>
          {
            alert("failure");
          }

        )
      
      }
        
   
    }  

  add()
  {
     this.educationFormArray.push
    (new FormGroup
      (
        {
           qualification:new FormControl(),
           year:new FormControl(),
           percentage:new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(5)])

        }
      )
    )
  }
    
  delete(i:any)
  {
    this.educationFormArray.removeAt(i);
  }
    
  get educationFormArray()
  {
    return this.employeeForm.get('education') as FormArray
  }
  

  employee:any=[];
  

  constructor(private employeeService:EmployeeService, private activatedRoute:ActivatedRoute)
  {

    this.employeeForm.get('role')?.valueChanges.subscribe
      (
        data=>{
              if(data=="FE")
                {
                  this.employeeForm.addControl('html',new FormControl())
                  this.employeeForm.addControl('angular',new FormControl())
                  this.employeeForm.removeControl('java')
                  this.employeeForm.removeControl('sql')
                }
                else
                {
                  this.employeeForm.addControl('java',new FormControl())
                  this.employeeForm.addControl('sql',new FormControl())
                  this.employeeForm.removeControl('html')
                  this.employeeForm.removeControl('angular')
                }
            }
      )

      this.activatedRoute.params.subscribe
      (
        (data:any)=>
        {
          this.employeeService.getemploye(data.id).subscribe
          (
            (data:any)=>
            {
               this.employee==data;
               this.employeeForm.patchValue(data);
            }
          )          
        },
        (error:any)=>
        {
          alert('error')
        }
      )
  }

    


  ngOnInit(): void {}

}
