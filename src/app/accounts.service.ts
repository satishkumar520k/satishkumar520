import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  
  accdata=[];
  getAccounts():Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  getfilteredAccounts(filterTerm:any):Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'?filter='+filterTerm);
  }

  getsortedAccounts(column:any,order:any):Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'?sortBy='+column+'&order='+order);
  }

  getpagedAccounts(page1:any,limit:any):Observable<any>
  {
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'?page='+page1+'&limit='+limit)
  }

  postaccounts(accounts:any):Observable<any>
  {
    return this.httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",accounts)
  }

  constructor(private httpclient:HttpClient) { }

}
