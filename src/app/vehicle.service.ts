import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  c=[];
  getVehicle():Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }

  // getVehicles()
  // {
  // return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");

  // }

  getfilteredVehicles(filterTerm:any):Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?filter='+filterTerm);
  }

  getsortedVehicles(column:any,order:any):Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?sortBy='+column+'&order='+order);
  }

  getpagedVehicles(page1:any,limit:any):Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?page='+page1+'&limit='+limit);
  }

  postvehicle(vehicle:any):Observable<any>
  {
    return this.httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle)
  }


  constructor(private httpclient:HttpClient) { }
  }
