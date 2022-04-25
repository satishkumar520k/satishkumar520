import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblingtwo',
  templateUrl: './siblingtwo.component.html',
  styleUrls: ['./siblingtwo.component.css']
})
export class SiblingtwoComponent implements OnInit {

  value:any=0;
  constructor(private commonService:CommonService) { 

    this.commonService.getData().subscribe(
     (data)=>{

          this.value=data;
     },
     (error)=>
     alert("error")
     
    )
  }
  ngOnInit(): void {
  }

}
