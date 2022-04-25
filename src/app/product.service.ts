import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 setData(value:any)
 {
   throw new Error('Method not implemented');
 }
 getProduct():Observable<any>
 {
  return this.httpClient.get('https://fakestoreapi.com/products')
 }
  constructor(private httpClient:HttpClient) { }
}
