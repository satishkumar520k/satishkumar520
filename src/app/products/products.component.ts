import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsdata:any=[];

  constructor(private productsService:ProductsService) { 

    productsService.getProducts().subscribe(

          (data:any)=>
          {
              this.productsdata=data;
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
