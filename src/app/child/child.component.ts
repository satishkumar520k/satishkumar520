import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() a=0;
  
  @Output() b:EventEmitter<any>=new EventEmitter();
  num=0;
  submit()
  {
    this.b.emit(this.num)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
