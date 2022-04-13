import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name="abc";
  number=123;
  boolean=true;
  undefined=undefined;
  array=[1,2,3];
  object={NAME:"A"};
  balence=NaN;
  user=null;
  person={
    name:"abc",
    age:20
  }
  dob="10/10/2020"

  constructor() { }

  ngOnInit(): void {
  }

}
 
