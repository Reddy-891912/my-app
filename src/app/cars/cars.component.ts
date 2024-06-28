import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  isHonda: boolean = false;
  isBmw: boolean = false;
  isAudi: boolean = false;

  honda() {
    this.isHonda = true;
    this.isBmw = false;
    this.isAudi = false;
  }

  bmw() {
    this.isBmw = true;
    this.isHonda = false;
    this.isAudi = false;
  }

  audi() {
    this.isAudi = true;
    this.isHonda = false;
    this.isBmw = false;
  }

}
