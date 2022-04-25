import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getemployees():Observable<any>
  {
    return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }

  getemployee():Observable<any>
  {
    return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }
  postemployee(employee:any): Observable<any>
  {
    return this.httpclient.post("https://6222413b666291106a21d80b.mockapi.io/employees",employee)
  }

  getemploye(id:any):Observable<any>
  {

  return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+id);

  }

  editemployee(employee:any):Observable<any>
  {
    console.log(employee)
    return this.httpclient.put("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+ employee.id, employee);
  }

  // getemploy(id:any):Observable<any>
  // {
  //   return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+'/'+id);

  // }


  constructor(private httpclient:HttpClient) { }
}
