import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {


  @Input() public num: number = 0;
  @Input() public num1: number = 0;
  @Output() public calcEvent: EventEmitter<any> = new EventEmitter();

  sum() {
    this.calcEvent.emit(this.num + this.num1);
  }

  sub() {
    this.calcEvent.emit(this.num - this.num1);
  }

  multiply() {
    this.calcEvent.emit(this.num * this.num1);
  }
}
