import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  num1=0;
  num2=0;
  sum()
  {
    alert(this.num1+this.num2);
  }
  sub()  
  {
    alert(this.num1-this.num2);
  }
  mul()  
  {
    alert(this.num1*this.num2);
  }
  div()
  {
    alert(this.num1/this.num2);
  }


  num3=0;
  num4=0;
  areaResult=0;
  perimeterResult=0;

  area()
  {
    alert(this.areaResult=this.num3*this.num4)
  }
  perimeter()
  {
    alert(this.perimeterResult=this.num3*2+this.num4*2)
  }

  
  names=[""];
  name="";
  submit()
  {
    this.names.push(this.name)
  }


  cartitems:any=[""]
  product="";
  quantity=0;
  price=0;


  addtocart()
  {
    var obj:any={};

    obj.product=this.product;
    obj.quantity=this.quantity;
    obj.price=this.quantity;

    this.cartitems.push(obj);
  }



  lusers:any=[""]
  name1="";
  email="";
  phone=0;
  city="";

  signup()
  {
    var obj:any={};

    obj.name1=this.name1;
    obj.email=this.email;
    obj.phone=this.phone;
    obj.city=this.city;

    this.lusers.push(obj);
  }

    isRed=true;

    Change()
    {
    this.isRed=!this.isRed;
    }



    constructor() { }

    ngOnInit(): void {
  }

}

