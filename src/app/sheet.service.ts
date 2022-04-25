import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  date:any=[];
  getData():Observable<any>
  {
    return this.httpClient.get("/assets/data.json")
  }

  constructor(private httpClient:HttpClient) { }
}
