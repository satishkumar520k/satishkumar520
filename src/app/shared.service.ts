import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public datasubject:BehaviorSubject<any>=new BehaviorSubject(0);
  getdata()
  {
    return this.datasubject.asObservable();
  
  }
  setData(value:any){
    this.datasubject.next(value) 
  }


  constructor() { }
}
