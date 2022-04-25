import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  accountsForm:FormGroup=new FormGroup({
    createaAt:new FormControl(),
    account_name:new FormControl(),
    available_balance:new FormControl(),
    currency:new FormControl(),
    account_number:new FormControl(),
    card: new FormArray([])
  })
  submit()
  {
    console.log(this.accountsForm);
    console.log(this.accountsForm.value);
    this.accountsService.postaccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        alert("success")
      },
      (error:any)=>{
         alert("failure")
      }
      )
        
  }

  get cardFormArray()
  {
    return this.accountsForm.get('card') as FormArray;
  }

  add()
  {
     this.cardFormArray.push(new FormGroup
      (
        {
           cardno:new FormControl(),
           expiry:new FormControl(),
           cvv:new FormControl()

        }
      ))
  }

  delete(i:any)
  {
    this.cardFormArray.removeAt(i);
  }

  constructor(private accountsService:AccountsService) { }

  ngOnInit(): void {
  }

}
