import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  @Input() xyz:any=null;
  product:any;
  cartcount=0;
  send()
  {
    this.productService.setData(this.product);
  }
  addtocart()
  {
    this.cartcount++;
    this.sharedService.setData(this.cartcount)
  }

  constructor(private productService: ProductService , private sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
