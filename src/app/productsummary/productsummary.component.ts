import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrls: ['./productsummary.component.css']
})
export class ProductsummaryComponent implements OnInit {

  product2:any=[]
  xyz:any=null;
  send(product:any){
    this.xyz=product
  }

  constructor(private productService:ProductService) { 

    productService.getProduct().subscribe(

      // (data:any): void=>
      (data:any)=>
      {
          this.product2=data;
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
