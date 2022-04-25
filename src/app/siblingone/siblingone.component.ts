import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblingone',
  templateUrl: './siblingone.component.html',
  styleUrls: ['./siblingone.component.css']
})
export class SiblingoneComponent implements OnInit {

  value=0;
  send()
  {
    this.commonService.setData(this.value)
  }

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

}
