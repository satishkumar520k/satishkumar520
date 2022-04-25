import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:any=[ ]
  postlogin(login:any):Observable<any>

  {
    return this.httpclient.post("https://reqres.in/api/login",login)
  }


  
  constructor(private httpclient:HttpClient) { }
}
