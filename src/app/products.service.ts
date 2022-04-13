import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsdata=[];
  getProducts():Observable<any>
  {
    return this.httpclient.get("https://fakestoreapi.com/products")
  }

  constructor(private httpclient:HttpClient) { }
}
