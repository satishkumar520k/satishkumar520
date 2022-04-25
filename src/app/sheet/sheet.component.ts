import { Component, OnInit } from '@angular/core';
import { SheetService } from '../sheet.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  details:any=[];
  
  constructor(private sheetService: SheetService) {
    sheetService.getData().subscribe(
      (data:any)=>
      {this.details=data}
    )
   }
  ngOnInit(): void {
  }

}
 