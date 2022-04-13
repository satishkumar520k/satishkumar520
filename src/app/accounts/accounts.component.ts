import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accdata:any=[];
   
  filterTerm ="";
  filter()
  {
      this.accdataService.getfilteredAccounts(this.filterTerm).subscribe(
        (data:any)=>{
          this.accdata=data;

        },
        (console:any)=>{
        
          alert("inernal server error")

        }
        )
  }

  column =" ";
  order =" ";
  sort()
  {
      this.accdataService.getsortedAccounts(this.column,this.order).subscribe(
        (data:any)=>{
          this.accdata=data;
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
    this.accdataService.getpagedAccounts(this.page1,this.limit).subscribe(
      (data:any)=>{
        this.accdata=data;
      },
      (error:any)=>{
        alert("internal server error")
      }
    )
  }

  constructor(private accdataService:AccountsService)
   {
     accdataService.getAccounts().subscribe(
      (data:any)=>
      {
        this.accdata=data;
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
